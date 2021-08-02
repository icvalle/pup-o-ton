import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      name
      username
      email
      dogs {
        _id
        name
      }
      friends {
        _id
        name
        username
      }
      playdate {
        _id
        day
        time
        location
        dog {
          _id
          name
        }
        playmate {
          _id
          username
          dogs {
            _id
            name
          }
        }
      }
    }
  }
`;

export const QUERY_DOGS = gql`
  query getDogs {
    dogs {
      _id
      name
      age
      breed
      weight
      image
      exercise {
        _id
        day
        type
        name
        duration
        sets
      }
      owner {
        _id
        name
      }
    }
  }
`;

export const QUERY_SINGLE_DOG = gql`
  query getSingleDog($dogId: ID!) {
  dog(dogId: $dogId) {
      _id
      name
      age
      breed
      weight
      image
      exercise {
        _id
        day
        type
        name
        duration
        sets
      }
      owner {
        _id
        name
      }
    }
  }
`;

export const QUERY_FRIENDS = gql`
  query getFriends {
    friends {
      _id
      name
      username
      dogs {
        _id
        name
      }
    }
  }
`;

export const QUERY_PLAYDATES = gql`
  query getPlaydates {
    playdate {
      _id
      day
      time
      location
      dog {
        _id
        name
      }
      playmate {
        _id
        username
        dogs {
          _id
          name
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      username
      email
      dogs {
        _id
        name
      }
      friends {
        _id
        name
        username
      }
      playdate {
        _id
        day
        time
        location
        dog {
          _id
          name
        }
        playmate {
          _id
          username
          dogs {
            _id
            name
          }
        }
      }
    }
  }
`;