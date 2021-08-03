const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String
        password: String
    }

    type Dog {
        _id: ID!
        name: String!
        age: Int
        breed: String
        weight: Int
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: User,
        dogs: [Dog],
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth,
        login(email: String!, password: String!): Auth,
        createDog(name: String!, age: Int, breed: String, weight: Int): Dog,
        
    }
`;

module.exports = typeDefs;