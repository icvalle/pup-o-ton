const { Schema, model } = require('mongoose');

const userdogSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    dogs: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Dog',
        },
    ],
});

const UserDog = model('UserDog', userdogSchema);

module.exports = UserDog;