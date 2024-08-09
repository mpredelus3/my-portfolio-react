import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import myPhoto from '../assets/images/photo-of-me.jpg'

function About() {
  return (
    <Container>
      <h1 className="text-center mb-4">About Me</h1>
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4">
          <Image 
            src={myPhoto} 
            alt="Mack Predelus" 
            roundedCircle 
            fluid 
            style={{ maxWidth: '200px' }} // Adjust the size as needed
          />
        </Col>
        <Col md={8}>
          <p>
            Hello! I'm Mack Predelus, a passionate developer with a strong background in coding and a love for creating innovative solutions. 
            I started my journey as a jet engine mechanic in the Air Force, where I developed a keen eye for detail and a problem-solving mindset. 
            After transitioning into the world of coding, I've continuously worked to improve my skills, particularly in web development, 
            where I enjoy building responsive and user-friendly applications.
          </p>
          <p>
            I'm always eager to learn new technologies and take on challenging projects. 
            When I'm not coding, you might find me streaming games on Twitch, staying active in sports, or enjoying time with friends.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
