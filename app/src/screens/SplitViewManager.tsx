import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResumePreview from "./ResumePreview";
import Summary from "./ResumeSections/Summary";
import Education from "./ResumeSections/Education";
import Experience from "./ResumeSections/Experience";
import Projects from "./ResumeSections/Projects";
import "./SplitViewManager.css";

const SplitViewManager: FC = () => {
  const [currentView, setCurrentView] = useState(0);

  const goToNextView = () => {
    setCurrentView((currentView) => currentView + 1);
  };

  const goToPrevView = () => {
    setCurrentView((currentView) => currentView - 1);
  };

  return (
    <div className="split-screen-container">
      <div className="left-side">
        {currentView === 0 && <Summary nextView={goToNextView} />}{" "}
        {currentView === 1 && (
          <Education nextView={goToNextView} prevView={goToPrevView} />
        )}
        {currentView === 2 && (
          <Experience nextView={goToNextView} prevView={goToPrevView} />
        )}
        {currentView === 3 && (
          <Projects nextView={goToNextView} prevView={goToPrevView} />
        )}
      </div>

      <div className="right-side">
        <ResumePreview />
      </div>
    </div>
  );
};

export default SplitViewManager;
