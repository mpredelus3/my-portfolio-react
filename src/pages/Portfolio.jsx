import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import projects from '../data/projects'; 
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  return (
    <Container>
      <h1>My Projects</h1>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <ProjectCard 
              title={project.title} 
              description={project.description} 
              image={project.image} 
              url={project.url} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
