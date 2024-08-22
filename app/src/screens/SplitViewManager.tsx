import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResumePreview from "./ResumePreview";
import Education from "./Education";
import Experience from "./Experience"
import "./SplitViewManager.css"

const SplitViewManager: FC = () => {
    return(
        <div className="split-screen-container">
            <div className="left-side">
                <Education />
            </div>

            <div className="right-side">
                <ResumePreview/>
            </div>
        </div>
    )
}

export default SplitViewManager