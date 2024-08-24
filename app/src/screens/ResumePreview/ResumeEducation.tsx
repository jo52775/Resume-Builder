import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumePreview.css";

const ResumeEducation: FC = () => {
  return (
    <div className="resume-section">
      <h3 className="section-heading"> EDUCATION </h3>
      <p className="section-content"> This is my education </p>
    </div>
  );
};

export default ResumeEducation;
