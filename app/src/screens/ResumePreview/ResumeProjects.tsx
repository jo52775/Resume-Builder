import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumePreview.css";

type ProjectsFormType = {
  projectType: string,
  name: string,
  description:string,
  startDate:string,
  endDate:string
}

interface ProjectsDisplayProps {
  formData: ProjectsFormType;
}

const ResumeProjects: FC<ProjectsDisplayProps> = ({formData}) => {
  return (
    <div className="resume-section">
      <h3 className="section-heading"> {formData.projectType} </h3>
      <p className="section-content"> {formData.name} {formData.description}</p>
      <p className="section-content"> {formData.startDate} {formData.endDate}</p>
    </div>
  );
};

export default ResumeProjects;
