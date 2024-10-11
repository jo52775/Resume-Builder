import React, { FC, useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar: FC = () => {
  const [profileEmail, setProfileEmail] = useState("");
  const [profileFullName, setProfileFullName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const profilePopupRef = useRef<HTMLDivElement>(null);
  const changePasswordPopupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    displayProfile();
  }, []);

  // Logout request
  const handleLogout = async () => {
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

  // Profile information request
  const displayProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/user-profile", {
        credentials: "include",
      });

      if (!response.ok) {
        console.log("Failed to display profile.");
        navigate("/login");
        return;
      }

      const data = await response.json();
      setProfileFullName(data.fullName);
      setProfileEmail(data.email);
    } catch (error) {
      console.log(error);
    }
  };

  // Change Password request
  const handleChangePassword = async (e: any) => {
    e.preventDefault();
    const passwordCredentials = {
      oldPassword,
      newPassword,
      confirmPassword,
    };

    try {
      const response = await fetch("http://localhost:5000/change-password", {
        credentials: "include",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passwordCredentials),
      });

      if (!response.ok) {
        console.log("Failed to send password change request");
        navigate("/login");
        return;
      }

      const data = await response.json();
      alert(data.message);

      if (data.message == "Password updated.") {
        handleLogout();
      }
    } catch (error) {
      console.log(error);
    }
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
        changePasswordPopupRef.current.style.display === "block"
          ? "none"
          : "block";
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/dashboard" className="navbar-logo">
          resumAI.
        </Link>
      </div>
      <div className="navbar-right">
        <button className="popup-button" onClick={toggleProfilePopup}>
          Profile
        </button>

        {/* Profile Popup */}
        <div
          ref={profilePopupRef}
          className="modal"
          style={{ display: "none" }}
        >
          <div className="modal-content">
            <span className="close" onClick={toggleProfilePopup}>
              &times;
            </span>
            <h2>Profile Information</h2>
            <p>Full Name: {profileFullName}</p>
            <p>Email: {profileEmail}</p>
            <button
              className="popup-button"
              onClick={toggleChangePasswordPopup}
            >
              Change Password
            </button>

            {/* Change Password Popup */}
            <div
              ref={changePasswordPopupRef}
              className="modal"
              style={{ display: "none" }}
            >
              <div className="modal-content">
                <span className="close" onClick={toggleChangePasswordPopup}>
                  &times;
                </span>
                <h2>Reset Password</h2>
                <form onSubmit={handleChangePassword}>
                  <label htmlFor="currentPassword">Current Password:</label>
                  <input
                    type="password"
                    id="currentPassword"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                  />
                  <br />
                  <br />
                  <label htmlFor="newPassword">New Password:</label>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <br />
                  <br />
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <br />
                  <br />
                  <button
                    className="popup-button"
                    type="submit"
                  >
                    Submit
                  </button>
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
