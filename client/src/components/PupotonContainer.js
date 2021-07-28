import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Dog1 from './pages/Dog1';
import Dog2 from './pages/Dog2';
import Dog3 from './pages/Dog3';
import Dog4 from './pages/Dog4';
import Footer from './Footer';
import "../index.css";
import "../script.js";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Dog2') {
      return <Dog2 />;
    }
    if (currentPage === 'Dog3') {
      return <Dog3 />;
    }
    if (currentPage === 'Dog4') {
      return <Dog4 />;
    }
    return <Dog1 />;
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