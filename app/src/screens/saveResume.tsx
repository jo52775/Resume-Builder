import React, { FC } from "react";
import { SaveResumeProps } from "./SaveResumeProps.js";

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
      <button onClick={handleSave}>Save Resume</button>
    </div>
  );
};

export default SaveResume;
