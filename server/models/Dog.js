const { Schema, model } = require('mongoose');

const dogSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for your dog"
  },
  age: {
    type: Number,
  },
  breed: {
    type: String,
  },
  weight: {
    type: Number,
  },
});

const Dog = model('Dog', dogSchema);

module.exports = Dog;