import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumePreview.css";
import parse from "html-react-parser";
import { formatDate } from "../../components/dateFormatter";

type ExperienceFormType = {
  companyName: string;
  positionTitle: string;
  keyResponsibilities: string;
  startDate: string;
  endDate: string;
  city: string;
};

interface ExperienceDisplayProps {
  formData: ExperienceFormType;
}

const ResumeExperience: FC<ExperienceDisplayProps> = ({ formData }) => {
  const responsibilities = formData.keyResponsibilities.split("\n");

  return (
    <div className="resume-section">
      <h3 className="section-heading"> EXPERIENCE </h3>
      <div className="section-content">
        <div className="company-row">
          <span className="company-name">{formData.companyName}</span>
          <span className="company-city">{formData.city}</span>
        </div>
        <div className="position-row">
          <span className="position-title">{formData.positionTitle}</span>
          <span className="position-dates">
            {formatDate(formData.startDate)} - {formatDate(formData.endDate)}
          </span>
        </div>
      </div>
      <div className="section-content">
        {responsibilities.map((responsibility, index) => (
          <div key={index}>{parse(responsibility.trim() || "")}</div>
        ))}
      </div>
    </div>
  );
};

export default ResumeExperience;
