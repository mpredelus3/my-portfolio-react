import React from 'react';
import './Footer.css'; // Custom CSS for the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"> {/* Will add soon */}
          <i className="fab fa-github"></i> {/* GitHub Icon */}
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">{/* Will add soon */}
          <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">{/* Will add soon */}
          <i className="fab fa-twitter"></i> {/* Twitter Icon */}
        </a>
      </div>
      <p>&copy; 2024 Mack Predelus. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
