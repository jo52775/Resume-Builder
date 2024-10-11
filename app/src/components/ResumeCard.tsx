import React, { FC, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumeCard.css";
import DownloadHelper from "./downloadFile";
import ResumeContact from "../screens/ResumePreview/ResumeContact";
import ResumeSummary from "../screens/ResumePreview/ResumeSummary";
import ResumeEducation from "../screens/ResumePreview/ResumeEducation";
import ResumeExperience from "../screens/ResumePreview/ResumeExperience";
import ResumeProjects from "../screens/ResumePreview/ResumeProjects";
import ResumeSkills from "../screens/ResumePreview/ResumeSkills";
import "../screens/SplitViewManager.css";

type ResumeCardType = {
  _id: string;
  contactFormData: {
    firstName: string;
    lastName: string;
    city: string;
    phoneNumber: string;
    email: string;
    link: string;
  };
  summaryFormData: string;
  educationFormData: {
    institutionName: string;
    major: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
  };
  experienceFormData: {
    companyName: string;
    positionTitle: string;
    keyResponsibilities: string;
    startDate: string;
    endDate: string;
    city: string;
  };
  projectsFormData: {
    projectType: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
  };
  skillsFormData: string[];
  documentTitle: string;
};

interface ResumeCardProps {
  resumeData: ResumeCardType;
}

const ResumeCard: FC<ResumeCardProps> = ({ resumeData }) => {
  const resume_id = `resume-dashboard-id-${resumeData._id}`; // Resume ID for downloading from dashboard
  const delete_id = resumeData._id; // Resume ID for deleting
  const fileName = resumeData.documentTitle;
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();

  const deleteResume = async () => {
    try {
      const response = await fetch("http://localhost:5000/delete-resume", {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          delete_id,
        }),
      });

      if (!response.ok) {
        console.log("Failed to delete resume.");
        navigate("/login");
        return;
      }

      const data = await response.json();

      if (data.message == "Resume has been deleted.") {
        setDeleted(true);
        alert("Resume has been deleted.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!deleted && (
        <div className="resume-card-container">
          <h2 className="card-title">{resumeData.documentTitle}</h2>

          <div className="button-container">
            <DownloadHelper containerID={resume_id} fileName={fileName}/>
            <button className="delete-resume-button" onClick={deleteResume}>
              <i className="fas fa-trash"></i> Delete
            </button>
          </div>

          <div id={resume_id} className="resume-content">
            <ResumeContact formData={resumeData.contactFormData} />
            <ResumeSummary formData={resumeData.summaryFormData} />
            <ResumeExperience formData={resumeData.experienceFormData} />
            <ResumeEducation formData={resumeData.educationFormData} />
            <ResumeProjects formData={resumeData.projectsFormData} />
            <ResumeSkills formData={resumeData.skillsFormData} />
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeCard;
