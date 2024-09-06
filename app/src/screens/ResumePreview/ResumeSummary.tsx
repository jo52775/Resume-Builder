import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumePreview.css";

interface SummaryDisplayProps {
  formData: string;
}

const ResumeSummary: FC<SummaryDisplayProps> = ({formData}) => {
  return (
    <div className="resume-section">
      <h3 className="section-heading"> SUMMARY </h3>
      <p className="section-content"> {formData} </p>
    </div>
  );
};

export default ResumeSummary;
