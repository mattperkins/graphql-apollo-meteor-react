/* eslint-disable */
// console.log("Hello, World!");

import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

//  Graphql Schema data structure of the query
const typeDefs = `
    type Query {
        yo: String
    }
`;

// Server Side Method - the query data
const resolvers = {
  Query: {
    yo() {
      return "yo yo yo!";
    }
  }
};

// create schema - connection
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

//  pass into apollo server
createApolloServer({ schema });
