import React from "react";
import { Link } from "react-router-dom";
import NavbarHome from "../components/NavbarHome";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <>
      <NavbarHome />
      <div className="home-container">
        <h1 className="tagline">
          <span>
            <strong>Craft a resume</strong>
          </span>
          <span> that leaves an impression.</span>
        </h1>

        <Link to="/login" className="get-started">
          Get Started
        </Link>
      </div>
    </>
  );
};

export default HomePage;
