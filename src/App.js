import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage'
import './App.css';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsNavVisible(window.innerWidth > 768); // Show nav by default on screens wider than 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="App">
      <button className="nav-toggle" onClick={toggleNavbar}>
        <span className="hamburger">☰</span>
      </button>
      <nav className={`navbar ${isNavVisible ? 'visible' : ''}`}>
        <div className={`nav-links ${isNavVisible ? 'visible' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">Products</a>
          <a href="#general-info">General Information</a>
          <a href="#news">News</a>
          <a href="#directions">Directions</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#our-history">Our History</a>
        </div>
      </nav>
      <LandingPage />
      <footer className="footer">
        <p className="copyright">&copy; 2023 Anderson Orchard. All rights reserved.</p>
        <div className="footer_category">
          <h4>Featured Products</h4>
          <ul>
            <li>Apples</li>
            <li>Oranges</li>
            <li>Pears</li>
          </ul>
        </div>
        <div className="footer_category">
          <h4>Attractions</h4>
          <ul>
            <li>Hayrides</li>
            <li>Apple Picking</li>
            <li>Apple Barn</li>
            <li>Field Trips</li>
          </ul>
        </div>
        <div className="footer_category">
          <h4>Forms</h4>
          <ul>
            <li>Join Our Mailing List</li>
            <li>Book a Field Trip</li>
          </ul>
        </div>
        <div className="footer_category">
          <h4>General Information</h4>
          <div className="double-column">
            <ul>
              <li>Hours of Operation</li>
              <li>Orchard Map</li>
              <li>Mailing List</li>
            </ul>
            <ul>
              <li>News</li>
              <li>Directions</li>
              <li>Contact Us</li>
              <li>Our History</li>
            </ul>
          </div>
        </div>
        <div className="company_info">
          <h4>Anderson Orchard</h4>
          <p>369 East Greencastle Road<br />
            Mooresville, IN 46158<br />
            317-831-4181</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
