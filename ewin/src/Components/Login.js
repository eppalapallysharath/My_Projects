import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../Redux/Actions/Action";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginData = { username: email, password: password };

  const data = useSelector((state) => state.login);
  console.log(data);

  const handleSubmit = () => {
    dispatch(fetchLogin(loginData, navigate));
  };

  return (
    <>
      <div className="d-flex justify-content-center border border-danger p-3 w-25 mx-auto rounded-4 mt-5">
        <form>
          <h3 className="text-center">Sign In</h3>
          <div>
            <label className="me-3">Email</label>
            <br />
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="me-2">Password</label>
            <br />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div>
            <Button variant="success" onClick={handleSubmit}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
