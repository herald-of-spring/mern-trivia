const { gql } = require("apollo-server-express");

// ！means that the field is non-nullable.
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    questionsCorrect: Int
    questionsAnswered: Int
    correctPercent: Int
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }
  
  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    updateUser(username: String!, questionsAnswered: Int!, questionsCorrect: Int!): User
  }
`;

module.exports = typeDefs;
