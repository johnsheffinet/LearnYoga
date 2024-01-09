import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefinitions = `
  type Query {
    info: String!
    feed: [Link!]!
  }
 
  type Mutation {
    createLink(url: String!, description: String!): Link!
  }
 
  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

type Link = {
  id: string;
  url: string;
  description: string;
};

const links: Link[] = [
  {
    id: "link-0",
    url: "https://graphql-yoga.com",
    description: "The easiest way of setting up a GraphQL server",
  },
];

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
  Mutation: {
   createLink: (url: string, description: string) => {
    const link: Link = {
     id: `link-${links.length}`,
     url: url,
     description: description,
    }
    
    return link
   }
  }
//  Link: {
//    id: (parent: Link) => parent.id,
//    description: (parent: Link) => parent.description,
//    url: (parent: Link) => parent.url,
//  },
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});
