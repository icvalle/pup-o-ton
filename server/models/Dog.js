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
  image: {
    type: String   // stores the path to the image.
  },
});

const Dog = model('Dog', dogSchema);

module.exports = Dog;
