import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumePreview.css";

const ResumeExperience: FC = () => {
  return (
    <div className="resume-section">
      <h3 className="section-heading"> EXPERIENCE </h3>
      <p className="section-content"> This is my experience </p>
    </div>
  );
};

export default ResumeExperience;
