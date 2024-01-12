import { makeExecutableSchema } from "@graphql-tools/schema";

let greeting = 'Hello, world!'

type User = { id: string; name: string };
let users: User[] = [{ id: "user-0", name: "Joan" }];

const typeDefinitions = `
  type Query {
   getHello: String!
   selectUsers: [User!]!
   selectUser(id: ID!): User
  }
  
  type Mutation {
   setHello(value: String!): String!
   createUser(name: String!): User!
   updateUser(id: ID!, name: String!): User!
   deleteUser(id: ID!): User!
  }
  
  type User {
   id: ID!
   name: String!
  }
`;

const resolvers = {
  Query: {
    getHello: () => greeting,
    selectUsers: () => {
      return users;
    },
    selectUser: (parent: unknown, args: {id: string}) => {
      let user = {id: 'unknown', name: "unknown"};
      const i = users.findIndex((x) => x.id === args.id);
      if (i > -1) {
       user = users[i];
      }
      return user;
    },
  },
  Mutation: {
    setHello: (parent: unknown, args: {value: string}) => greeting = args.value,
    createUser: (parent: unknown, args: {name: string}) => {
      const user = {id: `user-${users.length}`, name: args.name};
      users.push(user);
      return user;
    },
    updateUser: (parent: unknown, args: {id: string, name: string}) => {
      let user = {id: 'unknown', name: "unknown"};
      let i = users.findIndex((x) => x.id === args.id);
      if (i > -1) {
       users[i].name = args.name;
       user = users[i];
      };
      return user;
    },
    deleteUser: (parent: unknown, args: {id: string}) => {
      let user = {id: 'unknown', name: "unknown"};
      const i = users.findIndex((x) => x.id === args.id);
      if (i > -1) {
       user = users[i];
       users.splice(i, 1);
      };
      return user;
    },
  },
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});
