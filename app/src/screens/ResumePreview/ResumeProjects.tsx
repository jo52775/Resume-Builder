import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumePreview.css";
import parse from "html-react-parser";
import { formatDate } from "../../components/dateFormatter";

type ProjectsFormType = {
  projectType: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
};

interface ProjectsDisplayProps {
  formData: ProjectsFormType;
}

const ResumeProjects: FC<ProjectsDisplayProps> = ({ formData }) => {
  return (
    <div className="resume-section">
      <h3 className="projects-section-heading"> {formData.projectType} </h3>
      <div className="project-name-row">
        <span className="project-name">{formData.name}</span>
        <span className="project-dates">
          {formatDate(formData.startDate)} - {formatDate(formData.endDate)}
        </span>
      </div>
      <p className="section-content">{parse(formData.description || "")}</p>
    </div>
  );
};

export default ResumeProjects;
