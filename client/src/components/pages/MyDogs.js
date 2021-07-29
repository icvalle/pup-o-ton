import React from 'react';
import kirbyPic from '../../img/kirby.jpg';
import graph from '../../img/graph.png';
import chart from '../../img/pie-chart.png';

export default function Dog1() {
  return (
    <div className="content-container">
      <div className="dog-parent-container">
        <div className="dog-image-information">
          <div className="dog-image-container">
            <img src={kirbyPic} alt="" className="dog-image"></img>
          </div>
          <div className="dog-information-container">
            <p><b>Name:</b> Kirby</p>
            <p><b>Age:</b> 1y, 2m</p>
            <p><b>Breed:</b> Terrier Chihuahua</p>
            <p><b>Weight:</b> 15 lbs</p>
          </div>
        </div>
        <div className="parents">
          <p><b>Parents:</b></p>
          <p>Ryan Scherr</p>
          <p>Katie Kaminski</p>
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
            <h3>Duration:</h3>
            <h3>Distance:</h3>
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