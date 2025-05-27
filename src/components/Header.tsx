import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">Portfolio.</Link>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="hov">Home</Link>
        <Link to="/about" className='hov'>About Me</Link>
        <Link to="/services" className='hov'>Services</Link>
        <Link to="/blog" className='hov'>Blog</Link>
        <Link to="/results" className='hov'>Results</Link>
        <Link to="/contact" className='hov'>Contact</Link>
      </nav>

      <div className="bx bx-moon" id="darkMode-icon" onClick={toggleDarkMode}></div>
      <div className="bx bx-menu" id="menu-icon" onClick={toggleMenu}></div>
    </header>
  );
};

export default Header; 