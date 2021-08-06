const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const { Dog, Exercise, User, UserDog } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { username }) => {
            return User.findOne({ username });
        },
        userDog: async (parent, { userId }) => {
            return User.find({ userId }).populate('dogs');
        },
        dogs: async () => {
            return Dog.find();
        },
        dogExercise: async (parent, { id }) => {
            return Dog.find({ dogId: id}).populate('exercises');
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
        addDog: async (parent, {name, age, breed, weight}, context) => {
            const dog = await Dog.create({name, age, breed, weight});
            return dog;
            
        },
        // addExercise: async (parent, {day, type,  duration}) => {
        //     const exercise = await Exercise.create({day, type, duration});
        //      return exercise;
        // },
    },
};

module.exports = resolvers;