import React from 'react';
import '../script.js';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#my-dogs"
              onClick={() => handlePageChange('MyDogs')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'MyDogs' ? 'nav-link active' : 'nav-link'}
            >
              My Dogs
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#explore"
              onClick={() => handlePageChange('Explore')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Explore' ? 'nav-link active' : 'nav-link'}
            >
              Explore
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#find-furriends"
              onClick={() => handlePageChange('FindFurriends')}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'FindFurriends' ? 'nav-link active' : 'nav-link'}
            >
              Find Furriends
            </a>
          </li>
        </ul>
    </div>
  );
}

export default NavTabs;