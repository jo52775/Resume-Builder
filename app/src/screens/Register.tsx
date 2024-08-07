import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Login: FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: any) => {
    e.preventDefault()
    const registerCredentials = {
      fullName, 
      email,
      password,
      confirmPassword
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(registerCredentials),
    }

    fetch("http://localhost:5000/register", options)
    .then(response => response.json())
    .then(data => {
    console.log(data)

    if(data.message == "User created"){
      alert("User created!")            // temporary alert
      navigate("/")
    }

    else if(data.message == "password does not match"){
      alert("Provided passwords do not match.") // temporary alert
    }

    else{
      alert("User could not be created.") // temporary alert 
    }

    })
    .catch(error => console.error(error))

  }
  return (
    <div className="register-container">
      <div className="form-section">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
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
          <div className="form-group">
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
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
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
          <button type="submit">Sign in</button>
        </form>
        <div className="links">
          <p>Already have an account?</p>
          <Link to="/login" className="link">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
