const { Schema, model } = require('mongoose');

const dogexerciseSchema = new Schema({
    dogId: {
      type: Schema.Types.ObjectId,
      ref: 'Dog',
    },
    exercises: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Exercise',
        },
    ],
});

const DogExercise = model('DogExercise', dogexerciseSchema);

module.exports = DogExercise;