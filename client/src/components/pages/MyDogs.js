import React from 'react';
import kirbyPic from '../../img/kirby.jpg';
import graph from '../../img/graph.png';
import chart from '../../img/pie-chart.png';
import $ from 'jquery';

export default function MyDogs() {

  function showDogInfo() {
    $("#dogName").value = "";
    $("#dogAge").value = "";
    $("#dogBreed").value = "";
    $("#dogWeight").value = "";

    $(".new-dog-info").removeClass("hidden");
    $(".add-dog-btn").addClass("hidden");
  }

  function createDog() {
    $(".new-dog-info").addClass("hidden");
    $(".add-dog-btn").removeClass("hidden");

    // add code for adding dog to database
  }

  function cancel() {
    $(".new-dog-info").addClass("hidden");
    $(".add-dog-btn").removeClass("hidden");
  }

  let myDogs = ["Kirby", "Mr. Fluffy", "George"];
  const listOfDogs = myDogs.map(name => {
    return <button >{name}</button>;
  })

  console.log(myDogs.length);

  return (
    <div className="content-container">
      <div className="add-dog">
        <button className="add-dog-btn" onClick={showDogInfo}>Add a Dog</button>
      </div>
      <div className="new-dog-info hidden">
        <div className="questions-answers-container">
          <div className="questions">
            <h3>Name:</h3>
            <h3>Age:</h3>
            <h3>Breed:</h3>
            <h3>Weight:</h3>
          </div>
          <div className="answers">
            <input type="text" id="fname" name="fname" id="dogName"></input>
            <input type="text" id="fname" name="fname" id="dogAge"></input>
            <input type="text" id="fname" name="fname" id="dogBreed"></input>
            <input type="text" id="fname" name="fname" id="dogWeight"></input>
          </div>
        </div>
        <div className="create-dog-btn">
          <button onClick={createDog}>Add Dog</button>
          <button onClick={cancel}>Cancel</button>
        </div>
      </div>
      <div className="list-of-dogs">
        {listOfDogs}
      </div>
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