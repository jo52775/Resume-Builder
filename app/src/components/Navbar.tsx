import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./Navbar.css";

const Navbar: FC = () => {
  const navigate = useNavigate();


  const handleLogout = (e: any) => {
    e.preventDefault();

    const options: RequestInit = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
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
      <div className="navbar-left">
        <Link to="/dashboard" className="navbar-logo">
          ResumAI.
        </Link>
      </div>
      <div className="navbar-right">
        <a href="#popup" className="popup-button">Profile</a>
        <div id="popup" className="modal">
          <div className="modal-content">
            <a href="#!" className="close">&times;</a>
            <h2>Profile Information</h2>
            <p>First Name: John</p>
            <p>Last Name: Doe</p>
            <p>Email: john.doe@example.com</p>
            <a href="#passwordpopup" className="popup-button">Change Password</a>
            <div id="passwordpopup" className="modal">
              <div className="modal-content">
                <a href="#!" className="close">&times;</a>
                <h2>Reset Password</h2>
              </div>
            </div>


          </div>
        </div>
        <button id="logout" onClick={handleLogout} className="navbar-item">
          Logout
        </button>
      </div>
    </nav>
  );
};



export default Navbar;
