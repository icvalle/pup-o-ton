import React from 'react';
import kirbyPic from '../../img/kirby.jpg';
import graph from '../../img/graph.png';
import chart from '../../img/pie-chart.png';

export default function MyDogs() {
  return (
    <div className="content-container">
      <div className="test">
        <div className="dog-image-information">
          <div className="dog-image-container">
            <img src={kirbyPic} alt="" className="dog-image"></img>
          </div>
          <div className="dog-information-container">
            <h2><b>Name:</b> Kirby</h2>
            <h2><b>Age:</b> 1y, 2m</h2>
            <h2><b>Breed:</b> Terrier Chihuahua</h2>
            <h2><b>Weight:</b> 15 lbs</h2>
          </div>
        </div>
        <div className="parents">
          <h2><b>Parents:</b></h2>
          <h2>Ryan Scherr</h2>
          <h2>Katie Kaminski</h2>
        </div>
      </div>
      <hr></hr>
      <div className="exercise-information">
        <div className="graph-container">
          <img src={graph} alt=""></img>
        </div>
        <div className="chart-container">
          <img src={chart} alt=""></img>
        </div>
      </div>
      <hr></hr>
      <div className="add-exercise">
        <h2>Add Exercise</h2>
        <div className="exercise-options">
          <div className="words">
            <h3>Type of Exercise:</h3>
            <label for="fname">Duration:</label>
            <label for="fname">Distance:</label>
          </div>
          <div className="options">
            <select>
              <option value="actual value 1">Select</option>
              <option value="actual value 2">Exercise Type 1</option>
              <option value="actual value 3">Exercise Type 2</option>
            </select>
            <input type="text" id="fname" name="fname"></input>
            <input type="text" id="fname" name="fname"></input>
          </div>
        </div>
        <div className="exercise-btn-container">
          <button>Add Exercise</button>
        </div>
      </div>
    </div>
  );
}