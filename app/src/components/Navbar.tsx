import React, { FC, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar: FC = () => {
  const navigate = useNavigate();


  const profilePopupRef = useRef<HTMLDivElement>(null);
  const changePasswordPopupRef = useRef<HTMLDivElement>(null);


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


  const toggleProfilePopup = () => {
    if (profilePopupRef.current) {
      profilePopupRef.current.style.display =
        profilePopupRef.current.style.display === "block" ? "none" : "block";
    }
  };


  const toggleChangePasswordPopup = () => {
    if (changePasswordPopupRef.current) {
      changePasswordPopupRef.current.style.display =
        changePasswordPopupRef.current.style.display === "block" ? "none" : "block";
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/dashboard" className="navbar-logo">
          ResumAI.
        </Link>
      </div>
      <div className="navbar-right">
        <button className="popup-button" onClick={toggleProfilePopup}>Profile</button>

        {/* Profile Popup */}
        <div ref={profilePopupRef} className="modal" style={{ display: "none" }}>
          <div className="modal-content">
            <span className="close" onClick={toggleProfilePopup}>&times;</span>
            <h2>Profile Information</h2>
            <p>First Name: John</p>
            <p>Last Name: Doe</p>
            <p>Email: john.doe@example.com</p>
            <button className="popup-button" onClick={toggleChangePasswordPopup}>Change Password</button>

            {/* Change Password Popup */}
            <div ref={changePasswordPopupRef} className="modal" style={{ display: "none" }}>
              <div className="modal-content">
                <span className="close" onClick={toggleChangePasswordPopup}>&times;</span>
                <h2>Reset Password</h2>
                <form>
                  <label htmlFor="currentPassword">Current Password:</label>
                  <input type="password" id="currentPassword" required /><br /><br />
                  <label htmlFor="newPassword">New Password:</label>
                  <input type="password" id="newPassword" required /><br /><br />
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input type="password" id="confirmPassword" required /><br /><br />
                  <button className="popup-buttons" type="submit">Submit</button>
                </form>
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
