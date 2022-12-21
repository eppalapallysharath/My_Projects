import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../Redux/Actions/actions";
import "./index.css";

export const Login = () => {
  let [userEmail, setUserEmail] = useState("");
  let [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginR.login);
  console.log(loginState);

  const data = useSelector(state => state)
  console.log(data)



  let loginData = {
    email: userEmail,
    password: userPassword,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogin(loginData, navigate));
    // navigate("/Home");
  };

  return (
    <>
      <center>
        <div className="From-Container">
          <h3>Login</h3>
          <Form
          // onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                size="sm"
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                size="sm"
                onChange={(e) => setUserPassword(e.target.value)}
                value={userPassword}
                required
              />
            </Form.Group>
            <Button 
              variant="success"
              size="sm"
              //  type="submit"
              onClick={handleSubmit}
            >
              Login
            </Button>
            &nbsp; &nbsp;
            <Button
              variant="danger"
              size="sm"
              onClick={() => navigate("/signUp")}
            >
              Sign Up
            </Button>
          </Form>
        </div>
      </center>
    </>
  );
};
