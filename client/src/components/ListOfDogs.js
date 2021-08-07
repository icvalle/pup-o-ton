import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DOG } from '../utils/queries';
import $ from 'jquery';
import kirbyPic from '../img/kirby.jpg';
import graph from '../img/graph.png';
import chart from '../img/pie-chart.png';

const ListOfDogs = () => {

  // const buttons = $(".newTest");
  $(document).ready(function () {
    $(".dogButton").click(function () {
      $(".doggy").addClass("hidden");
      let name = $(this).data("name");
      let nameAgain = document.getElementById(name);
      $(nameAgain).removeClass("hidden");
    })
  })

  const { data } = useQuery(QUERY_DOG);
  const dogs = data?.dogs || [];

  const listOfDogs = dogs.map(dog => {
    return <div key={dog._id}>
      <button data-name={dog.name} className="dogButton">{dog.name}</button>
      <div className="hidden doggy" id={dog.name}>
        <div className="dog-parent-container">
          <div className="dog-image-information">
            <div className="dog-image-container">
              <img src={kirbyPic} alt="" className="dog-image"></img>
            </div>
            <div className="dog-information-container">
              <p><b>Name:</b>{dog.name}</p>
              <p><b>Age:</b>{dog.age}</p>
              <p><b>Breed:</b>{dog.breed}</p>
              <p><b>Weight:</b>{dog.weight}</p>
            </div>
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
      </div>
    </div>;
  })

  return (
    <div className="list-of-dogs">
      {listOfDogs}
    </div>
  );
};

export default ListOfDogs;