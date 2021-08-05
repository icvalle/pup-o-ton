const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    day: {
         type: Date,
         default: Date.now,
     },
    type: {
        type: String,
        trim: true,
        required: "Enter type of exercise"
    },
    duration: {
        type: Number,
        required: "Enter an amount"
    }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
