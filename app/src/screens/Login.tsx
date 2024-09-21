import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();

    const loginCredentials = { username, password };

    const options: RequestInit = {
      method: "POST",
      credentials:"include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginCredentials),
    };

    fetch("http://localhost:5000/login", options)
      .then((response) => response.json())
      .then((data) => {

        if (data.message === "login successful") {
          navigate("/dashboard");
        } else {
          alert("Login failed, please try again."); // this is temporary
        }

        setUsername("");
        setPassword("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="login__container">
      <div className="login__image-section"></div>
      <div className="login__form-section">
        <form onSubmit={handleLogin}>
          <div className="login__form-group">
            <label htmlFor="username">Your email</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login__form-group">
            <label htmlFor="password">Your password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Sign in</button>
        </form>
        <div className="login__links">
          <Link to="/forgot-password" className="login__link">
            Forgot Password?
          </Link>
          <br />
          <Link to="/register" className="login__link">
            Don’t have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
