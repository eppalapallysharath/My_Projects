import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GoogleLogoutAuthentication } from "./GoogleAuthentication";
import { Button } from "react-bootstrap";
import cartIcon from "../MediaFiles/trolley.png";
import "../index.css";
import { ToastContainer } from "react-toastify";

export const Home = () => {
  const googleData = useSelector((state) => state.googleLoginData);
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const cartCount = useSelector((state) => state);

  return ( 
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="nav">
          <Link to="/">
            <Navbar.Brand>ShopHuB.com</Navbar.Brand>
          </Link>
          <NavLink to="/Home">Home</NavLink>
          <Link to="/cart">
            <Button variant="success">
              Cart
              <img src={cartIcon} alt="cart_Icon" width="25px" />
              {cartCount.cart.length > 0 ? cartCount.cart.length : null}
            </Button>
          </Link>
          {isLoggedIn === "true" ? (
            <>
              <NavDropdown title="My Account" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <h6>Hi! &nbsp;{googleData.givenName}</h6>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <GoogleLogoutAuthentication />
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <>
              <NavLink to="/signUp">SignUp</NavLink>
              <NavLink to="/logIn">Log In</NavLink>
            </>
          )}
        </Container>
      </Navbar>
      <ToastContainer />
    </>
  );
};
