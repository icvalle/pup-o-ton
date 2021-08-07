import React, { useState } from 'react';
import { QUERY_DOG } from '../utils/queries';
import $ from 'jquery';
import kirbyPic from '../img/kirby.jpg';
import graph from '../img/graph.png';
import chart from '../img/pie-chart.png';
import Graph from './Graph';
import { useQuery } from '@apollo/client';
import { Line } from 'react-chartjs-2';
import { QUERY_EXERCISE } from '../utils/queries'
import AddExercise from './AddExercise';

const ListOfDogs = () => {

  // const buttons = $(".newTest");
  $(document).ready(function () {
    $(".dogButton").click(function () {
      $(".doggy").addClass("hidden");
      $(".dogButton").removeClass("dog-active");
      let name = $(this).data("name");
      $(this).addClass("dog-active");
      let nameAgain = document.getElementById(name);
      $(nameAgain).removeClass("hidden");
      const anotherDog = $(this).data('id');
      localStorage.setItem('dogId', anotherDog);
    })
  })

  const QueryExercise = () => {

    const dogId = localStorage.getItem('dogId')
    const { data } = useQuery(QUERY_EXERCISE, {
      variables: { dog: dogId }
    });
    const exercises = data?.exercises;
    const exerciseArray = []
    exercises.forEach(element => {
      exerciseArray.push(element.duration)
    });
    console.log(exercises)
    //return {data};
  }

  const { data } = useQuery(QUERY_DOG);
  const dogs = data?.dogs || [];

  const listOfDogs = dogs.map(dog => {
    return <div key={dog._id} className="doggoo">
      <div className="dog-btns">
        <button data-id={dog._id} data-name={dog.name} className="dogButton">{dog.name}</button>
      </div>
    </div>
  })

  const dogInfo = dogs.map(dog => {
    return <div className="hidden doggy" id={dog.name}>
      <div className="dog-parent-container">
        <div className="dog-image-information">
          <div className="dog-image-container">
            <img src={kirbyPic} alt="" className="dog-image"></img>
          </div>
          <div className="dog-information-container">
            <p><b>Name:</b> {dog.name}</p>
            <p><b>Age:</b> {dog.age}</p>
            <p><b>Breed:</b> {dog.breed}</p>
            <p><b>Weight:</b> {dog.weight}</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div id="dog-id" className="hidden">{dog._id}</div>
      <div className="graph-container">
          <Line data={{
            labels: ['6 days ago', '5 days ago', '4 days ago', '3 days ago', '2 days ago', 'yesterday'],
            datasets: [
              {
                label: 'Minutes per day',
                data: [12, 19, 25, 14, 22, 30],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
              },
            ],
          }} options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }} />
        </div>
      <AddExercise></AddExercise>
    </div>
  })

  return (
    <div className="all-dog-stuff">
      <div className="list-of-dogs">
        {listOfDogs}
      </div>
      <div className="dog-info">
        {dogInfo}
      </div>
      
    </div>
  );
};

export default ListOfDogs;