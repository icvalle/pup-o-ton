const { Schema, model } = require('mongoose');

const userfriendSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
    ],
});

const UserFriend = model('UserFriend', userfriendSchema);

module.exports = UserFriend;