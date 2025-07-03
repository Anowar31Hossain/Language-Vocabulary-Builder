import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <button className="hamburger" onClick={toggleDrawer}>
            ☰
          </button>
          <span className="logo">Vocabulary Builder</span>
        </div>

        <ul className="navbar-right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/wordlist">Word List</Link></li>
          <li><Link to="/addword">Add Word</Link></li>
          <li><Link to="/flashcard">Flashcard</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      {/* Sidebar Drawer */}
      <div className={`side-drawer ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeDrawer}>×</button>
        <ul>
          <li><Link to="/" onClick={closeDrawer}>Home</Link></li>
          <li><Link to="/wordlist" onClick={closeDrawer}>Word List</Link></li>
          <li><Link to="/addword" onClick={closeDrawer}>Add Word</Link></li>
          <li><Link to="/flashcard" onClick={closeDrawer}>Flashcard</Link></li>
          <li><Link to="/quiz" onClick={closeDrawer}>Quiz</Link></li>
          <li><Link to="/about" onClick={closeDrawer}>About</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeDrawer}></div>}
    </>
  );
};

export default Navbar;
