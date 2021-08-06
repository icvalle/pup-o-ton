const { Schema, model } = require('mongoose');

const dogSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for your dog"
  },
  age: {
    type: String,
  },
  breed: {
    type: String,
  },
  weight: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
  }
});

const Dog = model('Dog', dogSchema);

module.exports = Dog;
