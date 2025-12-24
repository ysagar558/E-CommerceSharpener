import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="justify-content-center">

        <Navbar.Brand as={NavLink} to="/">E-commerce Store</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-center">

            <NavLink exact to="/"
              className="nav-link"
            >
              HOME
            </NavLink>

            <NavLink
                to="/products"
                className="nav-link"
            >
                STORE
            </NavLink>

            <NavLink
              to="/about"
              className="nav-link"
            >
              ABOUT
            </NavLink>

            <NavLink 
            to="/contact"
            className="nav-link"
            >
              CONTACT US
            </NavLink>
            <NavLink to='/login' className='nav-link'>
            LOG IN
            </NavLink>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Navigation;
