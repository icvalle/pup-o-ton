const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        username: String!
        email: String!
        password: String!
    }

    type Dog {
        _id: ID!
        name: String!
        age: Int
        breed: String
        weight: Int
    }

    type Query {
        user: User
    }

    type Mutation {
        createUser(name: String!, username: String!, email: String!, password: String!): User
    }
`;

module.exports = typeDefs;