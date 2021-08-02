const { Schema, model } = require('mongoose');

const userplaydateSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    playdates: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Playdate',
        },
    ],
});

const UserPlaydate = model('UserPlaydate', userplaydateSchema);

module.exports = UserPlaydate;