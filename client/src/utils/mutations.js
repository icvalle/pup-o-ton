import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_DOG = gql`
  mutation addDog($name: String!, $age: String, $breed: String, $weight: String) {
    addDog(name: $name, age: $age, breed: $breed, weight: $weight, owner: $) {
      _id
      name
      age
      breed
      weight
    }
  }
`;

export const ADD_USERDOG = gql`
  mutation addUserDog($name: String!, $age: Int, $breed: String, $weight: Int, $image: String) {
    addUserDog(name: $name, age: $age, breed: $breed, weight: $weight, image: $image) {
      _id
      userId
      dogs {
        _id
        name
        age
        breed
        weight
        image
      }
    }
  }
`;

export const ADD_DOGEXERCISE = gql`
  mutation addDogExercise($day: Date, $type: String!, $name: String!, $duration: Int!, $sets: Int!) {
    addDogExercise(day: $day, type: $type, name: $name, duration: $duration, sets: $sets) {
      _id
      dogId
      exercises {
        _id
        day
        type
        name
        duration
        sets
      }
    }
  }
`;

export const ADD_EXERCISE = gql`
  mutation addExercise($day: Date, $type: String!, $name: String!, $duration: Int!, $sets: Int!) {
    addExercise(day: $day, type: $type, name: $name, duration: $duration, sets: $sets) {
      _id
      day
      type
      name
      duration
      sets
    }
  }
`;

export const ADD_PLAYDATE = gql`
  mutation addPlaydate($day: Date!, $time: Int, $location: String!, $dog: String!, $playmate: String!) {
    addPlaydate(day: $day, time: $time, location: $location, dog: $dog, playmate: $playmate) {
      _id
      day
      time
      location
      dog
      playmate
    }
  }
`;

