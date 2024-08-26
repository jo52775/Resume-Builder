import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumePreview.css";

type EducationFormType = {
  institutionName: string,
  major:string,
  degreeLevel:string,
  startDate:string,
  endDate:string
}

interface EducationDisplayProps {
  formData: EducationFormType;
}

const ResumeEducation: FC<EducationDisplayProps> = ({formData}) => {
  return (
    <div className="resume-section">
      <h3 className="section-heading"> EDUCATION </h3>
      <p className="section-content"> {formData.major} {formData.degreeLevel}</p>
      <p className="section-content"> {formData.institutionName} {formData.startDate} {formData.endDate}</p>
    </div>
  );
};

export default ResumeEducation;
