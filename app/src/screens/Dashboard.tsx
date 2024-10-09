import React, { FC, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "../components/Navbar";
import ResumeCard from "../components/ResumeCard";

const Dashboard: FC = () => {
  const [resumes, setResumes] = useState([]);

  const navigate = useNavigate();

  const fetchSavedResumes = async () => {
    try {
      const response = await fetch("http://localhost:5000/get-resumes", {
        credentials: "include",
      });

      if (!response.ok) {
        console.log("Failed to fetch resume data.");
        navigate("/login");
        return;
      }

      const data = await response.json();
      setResumes(data.message || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSavedResumes();
  }, []);

  const createResume = async (e: any) => {
    e.preventDefault();
    navigate("/resume-split-screen");
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-header">
        <button id="resumeCreateButton" onClick={createResume}>
          <i className="fas fa-plus"></i> Create New Resume
        </button>
      </div>

      <div className="saved-resume-container">
        {resumes.length > 0 && (
          <div className="resume-cards-container">
            {resumes.map((resume, index) => (
              <ResumeCard key={index} resumeData={resume} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
