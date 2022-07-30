import React from "react";
import logo from './Images/logo-bookmark.svg'
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const NavBar = () => {
  return (
    <div className="navBar">
      <img src={logo} alt="" />
      <Navbar bg="light" className="w-2" expand="lg">
        <Container fluid>
          {/* <Navbar.Brand href="#"></Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ zIndex:"2", width:"12rem", background:"white", position:"absolute", right:"60%" }}
              navbarScroll
            >
              <Nav.Link href="#action1">FEATURES</Nav.Link>
              <Nav.Link href="#action2">PRICING</Nav.Link>
              <Nav.Link href="#action2">CONTACT</Nav.Link>
              <Nav.Link href="#action2"><button>LOGIN</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
