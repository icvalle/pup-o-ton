import React from 'react';
import '../script.js';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="header">
        <h1>Pup-o-Ton Dog Fitness Tracker</h1>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#dog-1"
              onClick={() => handlePageChange('Dog1')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'Dog-1' ? 'nav-link active' : 'nav-link'}
            >
              Fido
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#dog-2"
              onClick={() => handlePageChange('Dog2')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Dog2' ? 'nav-link active' : 'nav-link'}
            >
              Kirby
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#dog-3"
              onClick={() => handlePageChange('Dog3')}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Dog3' ? 'nav-link active' : 'nav-link'}
            >
              Mr. Fluffy
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#dog-4"
              onClick={() => handlePageChange('Dog4')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Dog4' ? 'nav-link active' : 'nav-link'}
            >
              Sparkles
            </a>
          </li>
        </ul>
    </div>
  );
}

export default NavTabs;