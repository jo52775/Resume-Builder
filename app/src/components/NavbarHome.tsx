// NavbarHome.tsx
import React from "react";
import "./NavbarHome.css";

const NavbarHome: React.FC = () => {
  return (
    <nav className="navbar-home">
      <a href="/" className="navbar-home-logo">
        resumAI.
      </a>
      <div className="navbar-home-readme">
        <a
          href="https://github.com/jo52775/Resume-Builder"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-home-readme-link"
        >
          <i className="fab fa-github navbar-home-readme-icon"></i>
          <span>readme</span>
        </a>
      </div>
    </nav>
  );
};

export default NavbarHome;
