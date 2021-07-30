import React from 'react';

export default function FindFurriends() {
  return (
    <div className="content-container">
      <h2 className="title">Find Furriends!</h2>
      <div className="search-results-container">
        <div className="search-container">
          <div className="search">
            <h3>Search for Pup-O-Ton Friends:</h3>
            <input type="text" id="fname" name="fname" size="50" placeholder="Enter Username"></input>
          </div>
          <button>Search</button>
        </div>
        <div className="results-container">
          <h2>Results</h2>
          <div className="results">
            <h3>Result 1</h3>
            <h3>Result 2</h3>
            <h3>Result 3</h3>
            <h3>Result 4</h3>
          </div>
        </div>
      </div>
      <div className="friend-container">
          <div className="friend">
            <h2>Connect with: Username</h2>
            
          </div>
          <button>Become Furriends</button>
          <button>Schedule a Play Date</button>
        </div>
    </div>
  );
}