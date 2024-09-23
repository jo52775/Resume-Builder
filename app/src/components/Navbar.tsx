import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        <Link to="/profile" className="navbar-item">
          Profile
        </Link>
        <button id="logout" onClick={handleLogout} className="navbar-item">
          Logout
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
