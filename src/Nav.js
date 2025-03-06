// Nav.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const Nav = () => {
  return (
    <nav>
      <h1>Daquon Simpson</h1>  
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;