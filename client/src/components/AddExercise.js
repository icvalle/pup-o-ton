import React, { useState } from 'react';
import { ADD_EXERCISE } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const AddExercise = () => {

    const [exerciseState, setExerciseState] = useState({
        type: '',
        duration: '',
      });
      const [addExercise, { error, data }] = useMutation(ADD_EXERCISE);
    
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
    
      try {
        const { data } = await addExercise({
          variables: { ...exerciseState },
        });
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };
  
    return (
        <div className="add-exercise">
        <h2>Add Exercise</h2>
        <div className="exercise-options">
          <div className="words">
            <h3>Type of Exercise:</h3>
            <h3>Duration:</h3>
          </div>
          <div className="options">
            <select defaultValue={exerciseState.type} onChange={handleExerciseChange}>
              <option value="actual value 1">Select</option>
              <option value="actual value 2">Walk</option>
              <option value="actual value 3">Play</option>
            </select>
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