const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    users: [User]
    user(username: String!): User
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
`;

module.exports = typeDefs;
