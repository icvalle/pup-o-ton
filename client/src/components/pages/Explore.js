import React from 'react';

export default function Explore() {
  return (
    <div className="content-container">
      <h2 className="title">Explore Your Local Area for All Things Dog!</h2>
      <div className="search-results-container">
        <div className="search-container">
          <div className="search">
            <h3>Find Dog Parks Nearby:</h3>
            <input type="text" id="fname" name="fname" size="50"></input>
          </div>
          <div className="search-btn">
            <button>Search</button>
          </div>
          <hr></hr>
          <div className="search">
            <h3>Find Pet Stores Nearby:</h3>
            <input type="text" id="fname" name="fname" size="50"></input>
          </div>
          <div className="search-btn">
            <button>Search</button>
          </div>
          <hr></hr>
          <div className="search">
            <h3>Find Vets Nearby:</h3>
            <input type="text" id="fname" name="fname" size="50"></input>
          </div>
          <div className="search-btn">
            <button>Search</button>
          </div>
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
    </div>
  );
}