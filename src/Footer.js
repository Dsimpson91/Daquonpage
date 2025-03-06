import React from 'react';
import './Footer.css'; // Import the CSS for the Footer component
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
      </a>
      <a href="mailto:youremail@example.com">
        <FaEnvelope className="icon" />
      </a>
    </footer>
  );
}

export default Footer;