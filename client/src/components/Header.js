import React from 'react';
import Auth from '../utils/auth';

function Header() {

    function logMeOut() {
        Auth.logout();
    }

    return (
        <header className="header">
            <h1>Pup-o-Ton Dog Fitness Tracker</h1>
            <button onClick={logMeOut}>Logout</button>
        </header>
    )
}

export default Header;