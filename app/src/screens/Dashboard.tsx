import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard: FC = () => {

    // To be changed and styled later
    return(
        <div>
            <h1> Welcome to the Dashboard</h1>
            <div className="dashboard-container">
            <button> Create New Resume</button>
            <h2>Saved Resumes</h2>
            </div>
        </div>
        
    )
}

export default Dashboard