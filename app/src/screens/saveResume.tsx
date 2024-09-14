import React, { FC } from "react";

interface SaveResumeProps {
  contactFormData: {
    city: string;
    phoneNumber: string;
    email: string;
    link: string;
  };
  summaryFormData: string;
  educationFormData: {
    institutionName: string;
    major: string;
    degreeLevel: string;
    startDate: string;
    endDate: string;
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
}

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
      <button onClick={handleSave}>Save Resume</button>
    </div>
  );
};

export default SaveResume;
