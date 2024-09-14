import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumePreview.css";

const ResumePreview: FC = () => {
  return (
    <div className="resume-preview-container">
      <h2 className="resume-holder-name"> JOHN SMITH </h2>

      <div className="resume-section contact-info">
        <p className="section-content">
          City: New York, NY | Email: john.smith@example.com | Phone: (123)
          456-7890 | Website:{" "}
          <a
            href="https://johnsmith.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            johnsmith.com
          </a>
        </p>
      </div>
      <div className="resume-section">
        <h3 className="section-heading"> SUMMARY </h3>
        <p className="section-content"> This is my summary </p>
      </div>

      <div className="resume-section">
        <h3 className="section-heading"> EXPERIENCE </h3>
        <p className="section-content"> This is my experience </p>
      </div>
      <div className="resume-section">
        <h3 className="section-heading"> EDUCATION </h3>
        <p className="section-content"> This is my education </p>
      </div>
      <div className="resume-section">
        <h3 className="section-heading"> PROJECTS </h3>
        <p className="section-content"> These are my projects </p>
      </div>
      <div className="resume-section">
        <h3 className="section-heading"> SKILLS </h3>
        <p className="section-content"> These are my skills </p>
      </div>
    </div>
  );
};

export default ResumePreview;
