import { makeExecutableSchema } from "@graphql-tools/schema";

let greeting = 'Hello, World';

const typeDefinitions = `
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => greeting,
  },
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});
