import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard: FC = () => {

    // To be changed and styled later
    return(
        <div className="dashboard-container">
            <nav className="navbar">
                <ul className="navbar-items">
                    <li className="navbar-item"> <Link to="/"> About Us </Link></li>
                    <li className="navbar-item"> <Link to="/"> My Profile </Link></li>
                    <li className="navbar-item"> <Link to="/"> Logout </Link></li>
                </ul>
            </nav>
            
            <div className="dashboard-header">
                <h1> Welcome to the Dashboard</h1>
                <button id="resumeCreateButton"> Create New Resume</button>
            </div>

            <div className="saved-resume-container">
                <h2>Saved Resumes</h2>
            </div>
        </div>
    )
}

export default Dashboard