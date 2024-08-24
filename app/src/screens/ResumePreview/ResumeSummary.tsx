import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumePreview.css";

const ResumeSummary: FC = () => {
  return (
    <div className="resume-section">
      <h3 className="section-heading"> SUMMARY </h3>
      <p className="section-content"> This is my summary </p>
    </div>
  );
};

export default ResumeSummary;
