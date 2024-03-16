import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import ConditionalRendering from "./components/ConditionalRendering";

const App = () => {
  return (
    <Router>
      <nav className="navbar fixed-top bg-primary navbar-expand-lg bg-bodytertiary">
        <div className="container-fluid">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <ConditionalRendering />
        </div>
      </nav>
      <div className="container-fluid">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <div className="navbar fixed-bottom">
        <p>IT524046Q Demo</p>
      </div>
    </Router>
  );
};
export default App;
