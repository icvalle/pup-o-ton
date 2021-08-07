import React, { useState } from 'react';
import { ADD_EXERCISE } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const AddExercise = () => {

  const [exerciseState, setExerciseState] = useState({
    duration: '',
    dog: ''
  });
  const [addExercise, { error }] = useMutation(ADD_EXERCISE);

  const handleExerciseChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setExerciseState({
      ...exerciseState,
      [name]: value,
    });
  };

  const handleAddExercise = async (event) => {
    event.preventDefault();
    console.log(exerciseState);

    setExerciseState({
      ...exerciseState,
      dog: localStorage.getItem('dogId')
    })

    try {
      const { data } = await addExercise({
        variables: { ...exerciseState },
      });
      console.log(data);
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="add-exercise">
      <h2>Add Exercise</h2>
      <div className="exercise-options">
        <div className="words">
          <h3>Duration:</h3>
        </div>
        <div className="options">
          <input type="text" name="duration" defaultValue={exerciseState.duration} onChange={handleExerciseChange}></input>
        </div>
      </div>
      <div className="exercise-btn-container">
        <button onClick={handleAddExercise}>Add Exercise</button>
      </div>
    </div>
  );
};

export default AddExercise;