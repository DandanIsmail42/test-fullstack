import axios from "axios";
import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const Navigate = useNavigate();
  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/v1/users/login", {
        email: email,
        password: password,
      });
      Navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <main className="form-container">
        <Form onSubmit={Auth} className="form-box w-100 m-auto">
          <h1 className="h3 mb-3 fw-normal">Login</h1>
          <p>
            Belum Registrasi? <Link to="/register">Register</Link>
          </p>
          <FloatingLabel label="Email" controlId="formUserID">
            <Form.Control
              className="atas"
              placeholder="jhondoe"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </FloatingLabel>
          <FloatingLabel label="Password" controlId="formPassword">
            <Form.Control
              className="bawah"
              placeholder="pasword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </FloatingLabel>
          <Button type="submit" className="w-100 mt-3">
            Login
          </Button>
        </Form>
      </main>
    </div>
  );
};

export default Login;
