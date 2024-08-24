import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumePreview.css";

const ResumeProjects: FC = () => {
  return (
    <div className="resume-section">
      <h3 className="section-heading"> PROJECTS </h3>
      <p className="section-content"> These are my projects </p>
    </div>
  );
};

export default ResumeProjects;
