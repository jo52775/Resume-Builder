import React, { FC, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "../components/Navbar";

const Dashboard: FC = () => {
  const [resumes, setResumes] = useState([]);

  const fetchSavedResumes = async() => {
    try {
      const response = await fetch("http://localhost:5000/get-resumes", {
        credentials: "include"
      });

      if(!response.ok){
        console.log("Failed to fetch resume data.")
      }

      const data = await response.json();
      setResumes(data.message);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSavedResumes();
  }, [])
    
  const navigate = useNavigate();

  const createResume = async (e: any) => {
    e.preventDefault();
    navigate("/resume-split-screen");
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-header">
        <h1> Welcome to the Dashboard</h1>
        <button id="resumeCreateButton" onClick={createResume}>
          {" "}
          Create New Resume
        </button>
      </div>

      <div className="saved-resume-container">
        <h2>Saved Resumes</h2>

      </div>
    </div>
  );
};

export default Dashboard;

