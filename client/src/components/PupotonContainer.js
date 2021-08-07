import React  from 'react';
import MyDogs from './MyDogs';
import Footer from './Footer';
import Header from './Header';
import HomePage from './HomePage';
import "../index.css";
import Auth from '../utils/auth';

export default function PupotonContainer() {

  let landingPage = "";

  if (Auth.loggedIn()) {
    landingPage = <MyDogs />;
  } else {
    landingPage = <HomePage />
  }

  return (
    <div>
        <Header />
        {landingPage}
        <Footer />
    </div>
  );
}