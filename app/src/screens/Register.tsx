import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import Message from "../components/Message";
import NavbarHome from "../components/NavbarHome";

const Register: FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const navigate = useNavigate();

  const handleRegister = (e: any) => {
    e.preventDefault();
    const registerCredentials = {
      fullName,
      email,
      password,
      confirmPassword,
    };

    const options: RequestInit = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerCredentials),
    };

    fetch("http://localhost:5000/register", options)
      .then((response) => response.json())
      .then((data) => {
        switch (data.message) {
          case "User created":
            setMessage({
              type: "success",
              text: "User created successfully! Redirecting to dashboard...",
            });
            setTimeout(() => navigate("/dashboard"), 2000);
            break;
          case "password does not match":
            setMessage({
              type: "error",
              text: "Provided passwords do not match.",
            });
            break;
          case "email already exists":
            setMessage({
              type: "error",
              text: "Email already exists. Please try again.",
            });
            break;
          default:
            setMessage({
              type: "error",
              text: "User could not be created.",
            });
            break;
        }
      })
      .catch(() => {
        setMessage({
          type: "error",
          text: "An error occurred. Please try again later.",
        });
      });
  };

  return (
    <>
      <NavbarHome />
      <div className="register__container">
        <div className="register__form-section">
          <h1 className="login-header">Register</h1>
          <p className="login__tagline">Create an account to get started.</p>
          <form onSubmit={handleRegister}>
            <div className="login__form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="login__form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="login__form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="login__form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign up</button>
          </form>
          {message && <Message type={message.type} text={message.text} />}
          <div className="login__links">
            <Link to="/login" className="login__link">
              Already have an account? Login here.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
