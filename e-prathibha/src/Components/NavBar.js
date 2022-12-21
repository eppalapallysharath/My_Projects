import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../Media Files/logo.png";

export const NavBar = () => {
  const data = useSelector((state) => state.loginR.login);
  return (
    <Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" width="180px" height="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-light text-end">
            {data && Object.keys(data).length > 0 ? (
              <>
                <NavLink
                  to="/Home"
                  className="text-light text-decoration-none p-2"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/packages"
                  className="text-light text-decoration-none p-2"
                >
                  Packages
                </NavLink>
              </>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
