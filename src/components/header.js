import React from "react";
import "../styles/header.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div>
      <Navbar bg="black" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand className="title">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="profile" smooth={true} duration={500}>
                Profile
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
