import React from 'react';
import './Footer.css'; // Make sure you have a CSS file for styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Mack Predelus. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/mpredelus3" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="www.linkedin.com/in/mack-predelus-1aaa83156" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:mpredelus3@gmail.com">mpredelus3@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
