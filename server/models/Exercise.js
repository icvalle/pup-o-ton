const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        trim: true,
        required: "Enter type of exercise"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for the exercise"
    },
    duration: {
        type: Number,
        required: "Enter an amount"
    },
    sets: {
        type: Number,
        required: "Enter an amount"
    }
});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;