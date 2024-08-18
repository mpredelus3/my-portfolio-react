import React from 'react';
import '../components/Resume.css'; // Custom CSS for styling
import resumeFile from "../assets/Documents/Mack-Predelus.pdf"

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="text-center mb-4">Resume</h1>
      
      <div className="resume-download">
        <a href={resumeFile} download="Mack-Predelus-Resume.pdf" className="download-link">
          Download My Resume
        </a>
      </div>

      <div className="proficiencies-box">
        <h2>Proficiencies</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Git & GitHub</li>
          <li>API Development</li>
          <li>Responsive Design</li>
          <li>SQL</li>
          <li>Web APIs</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
