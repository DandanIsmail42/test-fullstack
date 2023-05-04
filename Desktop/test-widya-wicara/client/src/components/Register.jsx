import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");

  const Navigate = useNavigate();
  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/v1/users/regist", {
        name: name,
        email: email,
        gender: gender,
        password: password,
        confirmPassword: confirmPassword,
      });
      Navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <main className="form-container">
        <Form onSubmit={Register} className="form-box w-100 m-auto">
          <h1 className="h3 mb-3 fw-normal">Registrasi</h1>
          <p>{msg}</p>
          <FloatingLabel label="Name" controlId="formUserID">
            <Form.Control
              className="atas"
              placeholder="Masukan nama anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </FloatingLabel>

          <FloatingLabel label="Email" controlId="formUserID">
            <Form.Control
              className="atas"
              placeholder="Masukan nama anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </FloatingLabel>

          <FloatingLabel label="Gender" controlId="formUserID">
            <Form.Control
              className="atas"
              placeholder="Masukan nama anda"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
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

          <FloatingLabel label="Confirm Password" controlId="formPassword">
            <Form.Control
              className="bawah"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfPassword(e.target.value)}
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

export default Register;
