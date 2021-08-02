const { Schema, model } = require('mongoose');

const playdateSchema = new Schema({
    day: {
        type: Date,
        required: true
    },
    time: {
        type: Number
    },
    location: {
        type: String,
        required: true
    },
    dog: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Dog',
        },
    ],
    playmate: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
    ],
});

const Playdate = model('Playdate', playdateSchema);

module.exports = Playdate;