import React, { FC } from "react";
import { SaveResumeProps } from "./SaveResumeProps.js";
import "./SplitViewManager.css";
import {useNavigate} from "react-router-dom";

const SaveResume: FC<SaveResumeProps> = ({
  contactFormData,
  summaryFormData,
  educationFormData,
  experienceFormData,
  projectsFormData,
  skillsFormData,
  documentTitle,
}) => {
  
  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:5000/save-resume", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactFormData,
          summaryFormData,
          educationFormData,
          experienceFormData,
          projectsFormData,
          skillsFormData,
          documentTitle
        }),
      });

      if (!response.ok) {
        console.log("Failed to save resume.");
        navigate("/login");
        return;
      }

      const data = await response.json();
      alert(data.message || "Resume saved successfully");
      
      if(data.message == "Resume created"){
        navigate("/dashboard");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to save resume data.");
    }
  };

  return (
    <div>
      <button className="btn-save" onClick={handleSave}>
        <i className="fas fa-save" style={{ marginRight: "8px" }}></i> Save
      </button>
    </div>
  );
};

export default SaveResume;
