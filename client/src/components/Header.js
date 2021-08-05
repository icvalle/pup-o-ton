import React from 'react';
import Auth from '../utils/auth';

const styles = {
    iconStyle: {
      display: 'inline-block',
      width: '80px',
      height: 'auto',
      verticalAlign: 'middle',
      marginRight: '.35em',
    },
  };

function Header() {

    let logoutBtn;

    if (Auth.loggedIn()) {
        logoutBtn = <button class="logout" onClick={logMeOut}>Logout</button>
    } else {
        logoutBtn = <div></div>
    }

    function logMeOut() {
        Auth.logout();
    }

    return (
        <header className="header">
            
            <h1><img src="images/pup-o-ton_icon.png" alt="Pup-o-ton" style={styles.iconStyle} />Pup-o-Ton Dog Fitness Tracker</h1>
            {logoutBtn}
        </header>
    )
}

export default Header;