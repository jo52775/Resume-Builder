import React, { FC, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResumeCard.css";

type ResumeCardType = {
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

    const [showResume, setShowResume] = useState(false);

    const handleCardClick = () => {
      setShowResume(true);
    }

    return(
        <div className="resume-card-container" onClick={handleCardClick}>
            <label className="card-title-label"> Resume Title: </label>
            <p className="card-title">{resumeData.documentTitle}</p>
        </div>
    )
}

export default ResumeCard;