import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ADD_DOG } from '../../utils/mutations';
import kirbyPic from '../../img/kirby.jpg';
import graph from '../../img/graph.png';
import chart from '../../img/pie-chart.png';
import $ from 'jquery';
import ListOfDogs from '../ListOfDogs';
import QueryUser from '../QueryUser';
import AddExercise from '../AddExercise';


const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function MyDogs() {

  const [dogState, setDogState] = useState({
    name: '',
    age: '',
    breed: '',
    weight: '',
    image: '',
  });
  const [addDog, { error, data }] = useMutation(ADD_DOG);

  const handleDogChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setDogState({
      ...dogState,
      [name]: value,
    });
  };


const handleAddDog = async (event) => {
  console.log("First test!");
  event.preventDefault();
  console.log(dogState);

  try {
    const { data } = await addDog({
      variables: { ...dogState },
    });
    console.log(data);
  } catch (e) {
    console.error(e);
  }

  $(".new-dog-info").addClass("hidden");
  $(".add-dog-btn").removeClass("hidden");
};

  function showDogInfo() {
    $("#dogName").value = "";
    $("#dogAge").value = "";
    $("#dogBreed").value = "";
    $("#dogWeight").value = "";

    $(".new-dog-info").removeClass("hidden");
    $(".add-dog-btn").addClass("hidden");
  }

  function cancel() {
    $(".new-dog-info").addClass("hidden");
    $(".add-dog-btn").removeClass("hidden");
  }

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
            <input type="text" name="name" id="dogName" defaultValue={dogState.name} onChange={handleDogChange}></input>
            <input type="text" name="age" id="dogAge" defaultValue={dogState.age} onChange={handleDogChange}></input>
            <input type="text" name="breed" id="dogBreed" defaultValue={dogState.breed} onChange={handleDogChange}></input>
            <input type="text" name="weight" id="dogWeight" defaultValue={dogState.weight} onChange={handleDogChange}></input>
          </div>
        </div>
        <div className="create-dog-btn">
          <button onClick={handleAddDog}>Add Dog</button>
          <button onClick={cancel}>Cancel</button>
        </div>
      </div>
      <ListOfDogs></ListOfDogs>
      <QueryUser></QueryUser>
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
      <AddExercise></AddExercise>
    </div>
  );
}