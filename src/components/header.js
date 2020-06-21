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
            <Link to="home" smooth={true} duration={500}>
              <Nav.Link> Home </Nav.Link>
            </Link>

            <Link to="profile" smooth={true} duration={500}>
              <Nav.Link>Profile</Nav.Link>
            </Link>

            <Link to="about" smooth={true} duration={500}>
              <Nav.Link> About</Nav.Link>
            </Link>

            <Link to="contact" smooth={true} duration={500}>
              <Nav.Link>Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
