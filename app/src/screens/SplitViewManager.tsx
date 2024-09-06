import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResumeName from "./ResumePreview/ResumeName";
import ResumeSummary from "./ResumePreview/ResumeSummary";
import ResumeExperience from "./ResumePreview/ResumeExperience";
import ResumeEducation from "./ResumePreview/ResumeEducation";
import ResumeProjects from "./ResumePreview/ResumeProjects";
import ResumeSkills from "./ResumePreview/ResumeSkills";
import Contact from "./ResumeSections/Contact";
import Summary from "./ResumeSections/Summary";
import Education from "./ResumeSections/Education";
import Experience from "./ResumeSections/Experience";
import Projects from "./ResumeSections/Projects";
import Skills from "./ResumeSections/Skills";
import "./SplitViewManager.css";

const SplitViewManager: FC = () => {
  const [currentView, setCurrentView] = useState(0);

  const goToNextView = () => {
    setCurrentView((currentView) => currentView + 1);
  };

  const goToPrevView = () => {
    setCurrentView((currentView) => currentView - 1);
  };

  const [educationFormData, setEducationFormData] = useState({
    institutionName: "",
    major:"",
    degreeLevel:"",
    startDate:"",
    endDate:""
  });

  const [experienceFormData, setExperienceFormData] = useState({
    companyName: "",
    positionTitle:"",
    keyResponsibilities:"",
    startDate:"",
    endDate:"",
    city:""
  });

  const [projectsFormData, setProjectsFormData] = useState({
    projectType: "",
    name:"",
    description:"",
    startDate:"",
    endDate:"",
  }
)

  const[skillsFormData, setSkillsFormData] = useState<string[]>([]) 

  return (
    <div className="split-screen-container">
      <div className="left-side">
        {currentView === 0 && <Contact nextView={goToNextView} />}{" "}
        {currentView === 1 && (
          <Summary nextView={goToNextView} prevView={goToPrevView} />
        )}
        {currentView === 2 && (
          <Education nextView={goToNextView} prevView={goToPrevView} formData={educationFormData} setFormData={setEducationFormData}/>
        )}
        {currentView === 3 && (
          <Experience nextView={goToNextView} prevView={goToPrevView} formData={experienceFormData} setFormData={setExperienceFormData}/>
        )}
        {currentView === 4 && (
          <Projects nextView={goToNextView} prevView={goToPrevView} formData={projectsFormData} setFormData={setProjectsFormData}/>
        )}
        {currentView === 5 && <Skills prevView={goToPrevView} formData={skillsFormData} setFormData={setSkillsFormData}/>}
      </div>

      <div className="right-side">
        <div className="resume-preview-container">
          <ResumeName />
          <ResumeSummary />
          <ResumeExperience formData={experienceFormData}/>
          <ResumeEducation formData={educationFormData}/>
          <ResumeProjects formData = {projectsFormData}/>
          <ResumeSkills formData={skillsFormData}/>
        </div>
      </div>
    </div>
  );
};

export default SplitViewManager;
