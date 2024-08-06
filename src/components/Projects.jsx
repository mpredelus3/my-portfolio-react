import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Project({ project }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={project.image} alt={project.name} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Button variant="primary" href={project.link} target="_blank">
          View on GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Project;
