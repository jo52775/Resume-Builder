import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import "./ResumePreview.css";

interface SummaryDisplayProps {
  formData: string;
}

const ResumeSummary: FC<SummaryDisplayProps> = ({ formData }) => {
  return (
    <div className="resume-section">
      <h3 className="section-heading"> SUMMARY </h3>
      <div className="section-content">{parse(formData || "")}</div>
    </div>
  );
};

export default ResumeSummary;
