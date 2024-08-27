import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumePreview.css";

interface SkillsDisplayProps {
  formData: string[];
}

const ResumeSkills: FC<SkillsDisplayProps> = ({formData}) => {
  return (
    <div className="resume-section">
      <h3 className="section-heading"> SKILLS </h3>
      <p className="section-content">  {formData.map((item, index) => index == 0 ? item : ", " + item)} </p>
    </div>
  );
};

export default ResumeSkills;
