import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumePreview.css";

type ExperienceFormType = {
  companyName: string,
  positionTitle:string,
  keyResponsibilities:string,
  startDate:string,
  endDate:string,
  city:string
}

interface ExperienceDisplayProps {
  formData: ExperienceFormType;
}

const ResumeExperience: FC<ExperienceDisplayProps> = ({formData}) => {
  const responsibilities = formData.keyResponsibilities.split("\n");

  return (
    <div className="resume-section">
      <h3 className="section-heading"> EXPERIENCE </h3>
      <p className="section-content"> {formData.companyName} | {formData.city}</p>
      <p className="section-content">  {formData.positionTitle} | {formData.startDate} - {formData.endDate}</p>
      <ul className="section-content"> {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility.trim()}</li>
        ))}</ul>
    </div>
  );
};

export default ResumeExperience;
