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
import "../screens/SplitViewManager.css"

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
      documentTitle:string;
}

interface ResumeCardProps {
    resumeData: ResumeCardType;
}

const ResumeCard:FC<ResumeCardProps> = ({resumeData}) => {
    const resume_id = `resume-dashboard-id-${resumeData._id}`;
    return(
      <>
        <div className="resume-card-container">
            <label className="card-title-label"> Resume Title: </label>
            <p className="card-title">{resumeData.documentTitle}</p>

            <DownloadHelper containerID={resume_id}/>
            <button className="delete-resume-button"> Delete Resume </button>
        </div>


        <div id={resume_id} className="resume-preview-container">
        <div className="right-side-scroll">
          <ResumeContact formData={resumeData.contactFormData} />
          <ResumeSummary formData={resumeData.summaryFormData} />
          <ResumeExperience formData={resumeData.experienceFormData} />
          <ResumeEducation formData={resumeData.educationFormData} />
          <ResumeProjects formData={resumeData.projectsFormData} />
          <ResumeSkills formData={resumeData.skillsFormData} />
        </div>
        </div>
      </>
    )
}

export default ResumeCard;