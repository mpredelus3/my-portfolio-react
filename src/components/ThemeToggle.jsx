import React, { useState, useEffect } from 'react';
import './ThemeToggle.css'; // Make sure you have a CSS file for styles

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="theme-toggle">
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-button">
        {darkMode ? '🌙' : '☀️'}
      </button>
    </div>
  );
}

export default ThemeToggle;
