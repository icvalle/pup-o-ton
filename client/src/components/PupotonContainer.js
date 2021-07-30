import React, { useState } from 'react';
import NavTabs from './NavTabs';
import MyDogs from './pages/MyDogs';
import Explore from './pages/Explore';
import FindFurriends from './pages/FindFurriends';
import Footer from './Footer';
import "../index.css";
import "../script.js";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('MyDogs');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Explore') {
      return <Explore />;
    }
    if (currentPage === 'FindFurriends') {
      return <FindFurriends />;
    }
    else {
      return <MyDogs />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}