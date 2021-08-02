const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
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
        user: User,
        dogs: [Dog],
        exercises: [Exercise]
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User,
        createDog(name: String!, age: Int, breed: String, weight: Int): Dog,
        createExercise(day: Date!, type: String!, name: String!, duration: Int!, sets: Int!)
    }
`;

module.exports = typeDefs;