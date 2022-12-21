import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch} from "react-redux";
import { fetchVerificationCode } from "../Redux/Actions/actions";
import { Link, useNavigate } from "react-router-dom";

export const VerifyEmail = () => {
  let [regCode, setRegCode] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let verifyCode = { reg_code: regCode };

  const handleSubmit = () => {
    dispatch(fetchVerificationCode(verifyCode, navigate));
    // navigate("/login");
  };

  return (
    <>
      <center>
        <div className="From-Container">
          <h3>Verify Email</h3>
          <Form >
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Verify Email"
                size="sm"
                onChange={(e) => setRegCode(e.target.value)}
                value={regCode}
                required
              />
            </Form.Group>
            <Button variant="success" size="sm" onClick={handleSubmit}>
              Submit
            </Button>
            <br />
            <br />
            <Link to="/login">If you already have account LogIn</Link>
          </Form>
        </div>
      </center>
    </>
  );
};
