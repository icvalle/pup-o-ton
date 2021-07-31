import React from 'react';
import '../script.js';

function LoginButton() {
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
                    <button>Signup</button>
                </div>
            </div>
        </div>
    )
}

export default LoginButton;