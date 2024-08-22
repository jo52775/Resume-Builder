import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResumePreview from "./ResumePreview";
import Education from "./Education";
import Experience from "./Experience"
import "./SplitViewManager.css"

const SplitViewManager: FC = () => {
    
    // Handling navigation between forms
    const[currentView, setCurrentView] = useState(0)

    const goToNextView = () => {
        setCurrentView(currentView => currentView + 1)
    }

    const goToPrevView = () => {
        setCurrentView(currentView => currentView - 1)
    }

    return(
        <div className="split-screen-container">
            <div className="left-side">
                {currentView == 0 && <Education nextView={goToNextView} prevView={goToPrevView}/>}
                {currentView == 1 && <Experience/>}
            </div>

            <div className="right-side">
                <ResumePreview/>
            </div>
        </div>
    )
}

export default SplitViewManager