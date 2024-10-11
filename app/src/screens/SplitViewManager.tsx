import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ResumeContact from "./ResumePreview/ResumeContact";
import ResumeSummary from "./ResumePreview/ResumeSummary";
import ResumeExperience from "./ResumePreview/ResumeExperience";
import ResumeEducation from "./ResumePreview/ResumeEducation";
import ResumeProjects from "./ResumePreview/ResumeProjects";
import ResumeSkills from "./ResumePreview/ResumeSkills";
import DocumentTitle from "./ResumeSections/DocumentTitle";
import JobDescription from "./ResumeSections/JobDescription";
import Contact from "./ResumeSections/Contact";
import Summary from "./ResumeSections/Summary";
import Education from "./ResumeSections/Education";
import Experience from "./ResumeSections/Experience";
import Projects from "./ResumeSections/Projects";
import Skills from "./ResumeSections/Skills";
import SaveResume from "./saveResume";
import "./SplitViewManager.css";
import html2pdf from "html2pdf.js";
import DownloadHelper from "../components/downloadFile";

const SplitViewManager: FC = () => {
  const [currentView, setCurrentView] = useState(0);
  const navigate = useNavigate();

  // Authentication
  const verifyAuthToken = async () => {
    try {
      const response = await fetch("http://localhost:5000/verify", {
        credentials: "include",
      });

      if (!response.ok) {
        navigate("/login");
        return;
      }

      const data = await response.json();
    } catch (error) {
      console.log("Error in request for verifying auth.");
    }
  };

  useEffect(() => {
    verifyAuthToken();
  }, []);

  const goToNextView = () => {
    setCurrentView((currentView) => currentView + 1);
  };

  const goToPrevView = () => {
    setCurrentView((currentView) => currentView - 1);
  };

  const [documentTitle, setDocumentTitle] = useState("");

  const [jobDescriptionData, setJobDescriptionData] = useState({
    jobTitle: "",
    jobDescription: "",
  });

  const [contactFormData, setContactFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    phoneNumber: "",
    email: "",
    link: "",
  });

  const [summaryFormData, setSummaryFormData] = useState("");

  const [educationFormData, setEducationFormData] = useState({
    institutionName: "",
    major: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const [experienceFormData, setExperienceFormData] = useState({
    companyName: "",
    positionTitle: "",
    keyResponsibilities: "",
    startDate: "",
    endDate: "",
    city: "",
  });

  const [projectsFormData, setProjectsFormData] = useState({
    projectType: "Projects",
    name: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const [skillsFormData, setSkillsFormData] = useState<string[]>([]);

  // download PDF
  // const handleDownload = () => {
  //   const resumeContainer = document.querySelector(
  //     ".resume-preview-container"
  //   ) as HTMLElement;

  //   if (!resumeContainer) {
  //     console.error("Resume container not found.");
  //     return;
  //   }

  //   resumeContainer.style.border = "none";

  //   const options = {
  //     filename: "resume.pdf",
  //     margin: [0.1, 0.1, 0, 0.1],
  //     image: { type: "jpeg", quality: 1 },
  //     html2canvas: { scale: 2, useCORS: true },
  //     jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  //   };

  //   html2pdf()
  //     .set(options)
  //     .from(resumeContainer)
  //     .save()
  //     .catch(() => console.error("Error generating PDF."))
  //     .finally(() => {
  //       resumeContainer.style.border = "1px solid black";
  //     });
  // };

  return (
    <div>
      <Navbar />
      <div className="split-screen-container">
        <div className="left-side">
          {currentView === 0 && (
            <DocumentTitle
              nextView={goToNextView}
              documentTitle={documentTitle}
              setDocumentTitle={setDocumentTitle}
            />
          )}
          {currentView === 1 && (
            <JobDescription
              nextView={goToNextView}
              prevView={goToPrevView}
              formData={jobDescriptionData}
              setFormData={setJobDescriptionData}
            />
          )}
          {currentView === 2 && (
            <Contact
              nextView={goToNextView}
              prevView={goToPrevView}
              formData={contactFormData}
              setFormData={setContactFormData}
            />
          )}
          {currentView === 3 && (
            <Summary
              nextView={goToNextView}
              prevView={goToPrevView}
              formData={summaryFormData}
              setFormData={setSummaryFormData}
            />
          )}
          {currentView === 4 && (
            <Education
              nextView={goToNextView}
              prevView={goToPrevView}
              formData={educationFormData}
              setFormData={setEducationFormData}
            />
          )}
          {currentView === 5 && (
            <Experience
              nextView={goToNextView}
              prevView={goToPrevView}
              formData={experienceFormData}
              setFormData={setExperienceFormData}
            />
          )}
          {currentView === 6 && (
            <Projects
              nextView={goToNextView}
              prevView={goToPrevView}
              formData={projectsFormData}
              setFormData={setProjectsFormData}
            />
          )}
          {currentView === 7 && (
            <Skills
              prevView={goToPrevView}
              formData={skillsFormData}
              setFormData={setSkillsFormData}
              jobTitle={jobDescriptionData.jobTitle}
              jobDescription={jobDescriptionData.jobDescription}
            />
          )}
        </div>

        <div className="right-side">
          <div className="resume-actions">
            <SaveResume
              contactFormData={contactFormData}
              summaryFormData={summaryFormData}
              educationFormData={educationFormData}
              experienceFormData={experienceFormData}
              projectsFormData={projectsFormData}
              skillsFormData={skillsFormData}
              documentTitle={documentTitle}
            />
            <DownloadHelper containerID="resume-preview-id" fileName={documentTitle}/>
          </div>
          <div id="resume-preview-id" className="resume-preview-container">
            <div className="right-side-scroll">
              <ResumeContact formData={contactFormData} />
              <ResumeSummary formData={summaryFormData} />
              <ResumeExperience formData={experienceFormData} />
              <ResumeEducation formData={educationFormData} />
              <ResumeProjects formData={projectsFormData} />
              <ResumeSkills formData={skillsFormData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitViewManager;
