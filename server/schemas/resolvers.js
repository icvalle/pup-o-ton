const { Dog, Exercise, User } = require('../models');

const resolvers = {
    Query: {
        user: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return User.find(params);
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
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
        createExercise: async (parent, args) => {
            const exercise = await Exercise.create(args);
            return exercise;
        },
    }
}

module.exports = resolvers;