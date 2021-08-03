const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const { Dog, Exercise, User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        // user: async (parent, { _id }) => {
        //     const params = _id ? { _id } : {};
        //     return User.find(params);
        // },
        user: async (parent, { username }) => {
            return User.findOne({ username });
        },
        userDog: async (parent, { userId }) => {
            return User.find({ userId }).populate('dogs');
        },
        dogs: async () => {
            return Dog.find();
        },
        // dog: async (parent, { dogId }) => {
        //     return Dog.findOne({ _id: dogId });
        // },
        dogExercise: async (parent, { dogId }) => {
            return Dog.find({ dogId }).populate('exercises');
        },
        exercises: async () => {
            return Exercise.find();
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
        // addUser: async (parent, args) => {
        //     console.log('Creating user');
        //     const user = await User.create(args);
        //     const token = signToken(user);
        //     return { token, user };
        // },
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
        addDog: async (parent, args) => {
            const userId = args.userId;
            const dog = await Dog.create(args);
            const user = await User.findOneAndUpdate(userId,
                { $push: { dogs: dog } },
                { new: true }
            );
            return dog;
        },
        // addExercise: async (parent, args) => {
        //     const exercise = await Exercise.create(args);
        //     return exercise;
        // },
    },
};

module.exports = resolvers;