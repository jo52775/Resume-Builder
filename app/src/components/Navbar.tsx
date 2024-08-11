import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        <li className="navbar-item">
          {" "}
          <Link to="/"> About Us </Link>
        </li>
        <li className="navbar-item">
          {" "}
          <Link to="/"> My Profile </Link>
        </li>
        <li className="navbar-item">
          {" "}
          <Link to="/"> Logout </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
