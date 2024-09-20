import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumePreview.css";
import { formatDate } from "../../components/dateFormatter";

type EducationFormType = {
  institutionName: string;
  major: string;
  degreeLevel: string;
  startDate: string;
  endDate: string;
};

interface EducationDisplayProps {
  formData: EducationFormType;
}

const ResumeEducation: FC<EducationDisplayProps> = ({ formData }) => {
  return (
    <div className="resume-section">
      <h3 className="section-heading"> EDUCATION </h3>
      <div className="education-header">
        <span className="institution-name">{formData.institutionName}</span>{" "}
        {/* add the location at the end of the row */}
      </div>
      <div className="education-details">
        <span className="degree-major">{formData.major}</span>
        <span className="graduation-date">
          {formatDate(formData.startDate)} - {formatDate(formData.endDate)}
        </span>
      </div>
    </div>
  );
};

export default ResumeEducation;
