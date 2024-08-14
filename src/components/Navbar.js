import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/path-to-your-logo/logo.png" alt="Logo" />
        </Link>
      </div>
      <SearchBar />
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Lucrările Mele
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          Despre Mine
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
        <div className="dropdown">
          <button className="dropbtn">
            Proiecte
          </button>
          <div className="dropdown-content">
            <Link to="/project1" onClick={() => setIsOpen(false)}>Proiect 1</Link>
            <Link to="/project2" onClick={() => setIsOpen(false)}>Proiect 2</Link>
            <Link to="/project3" onClick={() => setIsOpen(false)}>Proiect 3</Link>
          </div>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
