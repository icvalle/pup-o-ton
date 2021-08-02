import React, { useState } from 'react';
import '../script.js';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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


const HomePage = () => {

        const [formState, setFormState] = useState({
          username: '',
          email: '',
          password: '',
        });
        const [addUser, { error, data }] = useMutation(ADD_USER);
      
        const handleChange = (event) => {
          const { name, value } = event.target;
      
          setFormState({
            ...formState,
            [name]: value,
          });
        };


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };
    

    return (
      <ApolloProvider client={client}>
        <div className="content-container">
            <div className="homepage-description">
                <p>Welcome! At Pup-o-Ton Dog Fitness Tracker, you can keep track of your dogs' exercise, find dog parks, stores, and vets nearby, and meet fellow dog-lovers in your area.</p>
                <p className="title">Sign up or login below to get started!</p>
            </div>
            <div className="login-signup-container">
                <div className="login-container">
                    <h2>Login</h2>
                    <div className="descriptors-inputs-container">
                        <div className="descriptors">
                            <h3>Username:</h3>
                            <h3>Email:</h3>
                            <h3>Password:</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" id="fname" name="fname"></input>
                            <input type="email" id="fname" name="fname"></input>
                            <input type="password" id="fname" name="fname"></input>
                        </div>
                    </div>
                    <button>Login</button>
                </div>
                <div className="signup-container">
                    <h2>Signup</h2>
                    <div className="descriptors-inputs-container">
                        <div className="descriptors">
                            <h3>Username:</h3>
                            <h3>Email:</h3>
                            <h3>Password:</h3>
                        </div>
                            <div className="inputs">
                            <input type="text" id="fname" name="fname"></input>
                            <input type="email" id="fname" name="fname"></input>
                            <input type="password" id="fname" name="fname"></input>
                        </div>
                    </div>
                    <button onClick={handleFormSubmit}>Signup</button>
                </div>
            </div>
        </div>
      </ApolloProvider>
    )
}

export default HomePage;