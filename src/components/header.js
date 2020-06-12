import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>

      <Navbar bg="black" variant="dark" expand="lg">
      <Navbar.Brand>Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Profile</Nav.Link>
        <Nav.Link href="#pricing">About</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>

  </div>

  );
};

export default Header;