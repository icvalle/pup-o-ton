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
  mutation addUser($name: String!, $username: String!, $email: String!, $password: String!) {
    addUser(name: $name, username: $username, email: $email, password: $password) {
      token
      user {
        _id
        name
        username
      }
    }
  }
`;

export const ADD_DOG = gql`
  mutation addDog($name: String!, $age: Int, $breed: String, $weight: Int, $image: String) {
    addDog(name: $name, age: $age, breed: $breed, weight: $weight, image: $image) {
      _id
      name
      age
      breed
      weight
      image
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
  mutation addPlaydate($day: Date!, $time: Int, $location: String!) {
    addPlaydate(day: $day, time: $time, location: $location) {
      _id
      day
      time
      location
    }
  }
`;

