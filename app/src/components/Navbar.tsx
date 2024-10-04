import React, { FC, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar: FC = () => {

  const [profileEmail, setProfileEmail] = useState("");
  const [profileFullName, setProfileFullName] = useState("");
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

  const displayProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/user-profile", {
        credentials: "include"
      });

      if (!response.ok) {
        console.log("Failed to display profile.");
        navigate("/login");
        return;
      }

      const data = await response.json();
      console.log(data.message);
      setProfileFullName(data.fullName);
      setProfileEmail(data.email);
    } catch (error) {
      console.log(error);
    }
  }


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
        <a href="#popup" className="popup-button">Profile</a>
        <div id="popup" className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleProfilePopup}>&times;</span>
            <h2>Profile Information</h2>
            <p>First Name: John</p>
            <p>Last Name: Doe</p>
            <p>Email: john.doe@example.com</p>
            <a href="#passwordpopup" className="popup-button">Change Password</a>
            <div id="passwordpopup" className="modal">
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
                  <button type="submit">Submit</button>
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
