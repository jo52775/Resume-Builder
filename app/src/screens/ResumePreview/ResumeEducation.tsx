import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumePreview.css";
import parse from "html-react-parser";
import { formatDate } from "../../components/dateFormatter";

type EducationFormType = {
  institutionName: string;
  major: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string | undefined;
};

interface EducationDisplayProps {
  formData: EducationFormType;
}

const ResumeEducation: FC<EducationDisplayProps> = ({ formData }) => {
  return (
    <div className="resume-section">
      <h3 className="section-heading"> EDUCATION </h3>
      <div className="education-header">
        <span className="institution-name">{formData.institutionName}</span>
        <span className="institution-location">{formData.location}</span>
      </div>
      <div className="education-details">
        <span className="degree-major">{formData.major}</span>
        <span className="graduation-date">
          {formatDate(formData.startDate)} - {formatDate(formData.endDate)}
        </span>
      </div>
      <div className="education-description">
        <span className="education-description">
          <span className="section-content">
            {parse(formData.description || "")}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ResumeEducation;
