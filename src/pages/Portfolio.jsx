import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import projects from '../data/projects';  // Ensure the path is correct
import ProjectCard from '../components/ProjectCard';


function Portfolio() {
  return (
    <Container>
      <h1 className="text-center">My Projects</h1> {/* Centering the heading */}
      <Row className="justify-content-center">  {/* Centering the cards horizontally */}
        {projects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4 d-flex justify-content-center"> {/* Center and add vertical spacing */}
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
