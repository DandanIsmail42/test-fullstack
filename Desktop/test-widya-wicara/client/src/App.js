import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <React.Fragment>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </React.Fragment>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
