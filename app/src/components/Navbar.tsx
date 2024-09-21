import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        <li className="navbar-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/profile">My Profile</Link>
        </li>
        <li className="navbar-item">
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
