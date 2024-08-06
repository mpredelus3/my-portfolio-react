import React from 'react';
import projects from '../data/projects';
import Project from './Project';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Portfolio() {
  return (
    <Container>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Project project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
