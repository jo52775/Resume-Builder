import React, { FC } from "react";
import { SaveResumeProps } from "./SaveResumeProps.js";
import "./SplitViewManager.css";

const SaveResume: FC<SaveResumeProps> = ({
  contactFormData,
  summaryFormData,
  educationFormData,
  experienceFormData,
  projectsFormData,
  skillsFormData,
}) => {
  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:5000/save-resume", {
        method: "POST",
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
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save resume");
      }

      const data = await response.json();
      alert(data.message || "Resume saved successfully");
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
