const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const { Dog, Exercise, User } = require('../models');

const resolvers = {
    Query: {
        user: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return User.find(params);
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            console.log('Creating user');
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        createDog: async (parent, args) => {
            const userId = args.userId;
            const dog = await Dog.create(args);
            const user = await User.findOneAndUpdate(userId,
                { $push: { dogs: dog } },
                { new: true }
            );
            return dog;
        },
        // createExercise: async (parent, args) => {
        //     const exercise = await Exercise.create(args);
        //     return exercise;
        // },
    }
}

module.exports = resolvers;