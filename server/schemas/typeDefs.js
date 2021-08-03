const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Dog {
        _id: ID
        name: String!
        age: String
        breed: String
        weight: String
        image: String
    }

    type UserDog {
        _id: ID
        userId: [User]
        dogs: [Dog]
    }

    type DogExercise {
        _id: ID
        dogId: [Dog]
        dogs: [Exercise]
    }

    type Exercise {
        _id: ID
        type: String
        name: String
        duration: Int
        sets: Int
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        userDog(userId: ID!): Dog
        getDog: Dog
        dogExercise(dogId: ID!): Exercise
        getExercise: Exercise
        dogs: [Dog]
        exercises: [Exercise]
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addDog(name: String!, age: String, breed: String, weight: String, image: String): Dog
        addUserDog(name: String!, age: Int, breed: String, weight: Int, image: String): UserDog
        
    }
`;

module.exports = typeDefs;