const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    duration: {
        type: String,
        required: "Enter an amount"
    },
    dog: {
        type: String,
    }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
