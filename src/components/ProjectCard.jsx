import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import horiseonImg from '../assets/images/horiseon.jpg'

function ProjectCard({ title, description, image, url }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={horiseonImg} alt="Horiseon project" />  {/* Using the image */}
      <Card.Body>
        <Card.Title>Horiseon Project</Card.Title>
        <Card.Text>
          My very first project 
        </Card.Text>
        <Button variant="primary" href='https://mpredelus3.github.io/horiseon01/' target="_blank" rel="noopener noreferrer">View Project</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;