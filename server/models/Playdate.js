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
    dog: {
        type: String,
        required: true
    },
    playmate: {
        type: String,
        required: true
    },
});

const Playdate = model('Playdate', playdateSchema);

module.exports = Playdate;
