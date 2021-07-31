import React from 'react';
import { Link } from 'react-router-dom';
import '../script.js';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const LoginButton = () => {
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
        <div className="content-container">
            <div className="homepage-description">
                <h1>Pup-o-Ton Dog Fitness Tracker</h1>
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

                {data ? (
                    <p>
                        Success! You may now head{' '}
                        <Link to="/">back to the homepage.</Link>
                    </p>
                ) : (
                    <div className="signup-container">
                        <h2>Signup</h2>
                        <div className="descriptors-inputs-container">
                            <div className="descriptors">
                                <h3>Username:</h3>
                                <h3>Email:</h3>
                                <h3>Password:</h3>
                            </div>
                            <form className="inputs" onSubmit={handleFormSubmit}>
                                <input type="text" id="fname" name="fname" value={formState.name} onChange={handleChange}></input>
                                <input type="email" id="fname" name="fname" value={formState.email} onChange={handleChange}></input>
                                <input type="password" id="fname" name="fname" value={formState.password} onChange={handleChange}></input>
                            </form>
                        </div>
                        <button type="submit">Signup</button>
                    </div>
                )}

                {error && (
                <div className="my-3 p-3 bg-danger text-white">
                    {error.message}
                </div>
                )}

            </div>
        </div>
    );
};

export default LoginButton;