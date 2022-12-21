import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignup } from "../Redux/Actions/actions";
import { Link, useNavigate } from "react-router-dom";

export const RegistrationPage = () => {
  let [userEmail, setUserEmail] = useState('')
  let [userName, setUserName] = useState('')
  let [userPassword, setUserPassword] = useState('')
  let [userConfirmPassword, setUserConfirmPassword] = useState('')
  let [userPhone, setUserPhone] = useState("")

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const signUpState = useSelector(state => state.signUpR.signUp)
  console.log(signUpState);

  const registerData = {
    email: userEmail,
    name: userName,
    password: userPassword,
    confirmPassword: userConfirmPassword,
    phone: userPhone,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchSignup(registerData, navigate))
    // navigate("/signUp/verifyEmail")
  }

  return (
    <>
      <center>
        <div className="From-Container">
          <h3>SignUp</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                size="sm"
                required
                onChange={(e) => setUserEmail(e.target.value)}
                value = {userEmail} 
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                size="sm"
                required
                onChange={(e) => setUserName(e.target.value)}
                value = {userName}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Password*</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                size="sm"
                required
                onChange={(e) => setUserPassword(e.target.value)}
                value = {userPassword}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Confirm Password*</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                size="sm"
                required
                onChange={(e) => setUserConfirmPassword(e.target.value)}
                value = {userConfirmPassword}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Phone*</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone"
                size="sm"
                required
                onChange={(e) => setUserPhone(e.target.value)}
                value = {userPhone}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="file"
                placeholder="Upload Photo"
                size="sm"
              />
            </Form.Group>
            <Button variant="warning" size="sm" type="submit">
              Sign Up
            </Button> <br/> 
            <p>If you have account?<Link to="/login">LogIn</Link></p>
          </Form>
        </div>
      </center>
    </>
  );
};
