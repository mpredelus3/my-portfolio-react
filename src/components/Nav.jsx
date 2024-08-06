import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink as Link } from 'react-router-hash-link';

function HeaderNav() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Mack Predelus</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} smooth to="/about">About Me</Nav.Link>
            <Nav.Link as={Link} smooth to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} smooth to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} smooth to="/resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderNav;
