import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar: FC = () => {
  
  const navigate = useNavigate()

  const handleLogout = (e:any) => {
    e.preventDefault();
    
    const options: RequestInit = {
      method: "POST",
      credentials:"include",
      headers: {
        "Content-Type": "application/json",
      }
    };

    fetch("http://localhost:5000/logout", options)
      .then((response) => response.json())
      .then((data) => {

        if (data.message === "logout successful") {
          navigate("/");
        } else {
          alert("Logout failed");
        }
      })
      .catch((error) => console.error(error));
  };
  
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
          <button id="logout" onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
