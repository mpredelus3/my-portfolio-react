import React from 'react';
import '../components/Resume.css'; // Custom CSS for styling the resume section
import myResume from '../assets/Documents/resume.pdf'; // Assuming your resume is stored in the assets folder

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="text-center mb-4">Resume</h1>
      
      <div className="resume-download">
        <a href={myResume} download="Mack_Predelus_Resume.pdf" className="download-link">
          Download My Resume
        </a>
      </div>

      <div className="about-box"> {/* Apply the about-box class here */}
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
          <li>Web API's</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
