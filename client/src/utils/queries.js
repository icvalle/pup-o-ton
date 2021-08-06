import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_USERDOG = gql`
  query userDog($userId: ID!) {
    userDog(userId: $userId) {
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

export const QUERY_DOG = gql`
  query getDog {
    dogs {
      _id
      name
      age
      breed
      weight
      image
    }
  }
`;

export const QUERY_DOGEXERCISE = gql`
  query dogExercise($dogId: ID!) {
    dogExercise(dogId: $dogId) {
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

export const QUERY_EXERCISE = gql`
  query getExercise {
    exercise {
      _id
      day
      type
      name
      duration
      sets
    }
  }
`;

export const QUERY_PLAYDATE = gql`
  query getPlaydate {
    playdate {
      _id
      day
      time
      location
      dog
      playmate
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;