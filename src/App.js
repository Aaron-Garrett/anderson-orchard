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
    </div>
  );
}

export default App;
