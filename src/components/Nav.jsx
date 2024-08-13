import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink as Link } from 'react-router-hash-link';
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component

function HeaderNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/about">Mack Predelus</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} smooth to="/about">About Me</Nav.Link>
            <Nav.Link as={Link} smooth to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} smooth to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} smooth to="/resume">Resume</Nav.Link>
          </Nav>
          <ThemeToggle /> {/* Add ThemeToggle here */}
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderNav;
