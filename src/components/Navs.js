import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';

function Navs() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">My Favorites</Nav.Link>
            <Nav.Link href="#link">Random</Nav.Link>
            <NavDropdown title="Best of" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Brandy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cognac</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Rum</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vodka</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tequila</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Whiskey</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Wine</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
