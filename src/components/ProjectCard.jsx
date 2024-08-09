import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import horiseonImg from '../assets/images/horiseon.jpg'
import comingSoon from "../assets/images/comingSoon.jpg"

function ProjectCard({ title, description, image, url }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt={title} />  {/* Using the image */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description} 
        </Card.Text>
        <Button variant="primary" href={url} target="_blank" rel="noopener noreferrer">View Project</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;