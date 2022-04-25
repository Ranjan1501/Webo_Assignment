import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <div className="navbar">
        <Link to="/" className="link">
          {" "}
          Home
        </Link>
        <Link to="/login" className="link">
          {" "}
          Login
        </Link>
        <Link to="/register" className="link">
          {" "}
          Register
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
