import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DetailsForm: FC = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProjects] = useState("");
  const [skills, setSkills] = useState("");

  return (
    <div className="details-form-container">
      <h2> Enter your resume details below. </h2>
      <form>
        <div className="form-group">
          <label htmlFor="jobTitle">Enter desired job title: </label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="work-experience">
            Enter relevant work experience:{" "}
          </label>
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="projects">
            Enter projects with a brief description for each:{" "}
          </label>
          <input
            type="text"
            value={projects}
            onChange={(e) => setProjects(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="skills">Enter your top skills: </label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="e.g Javascript, Python, Microsoft Office, etc."
          />
        </div>

        <button type="submit"> Generate Resume </button>
      </form>
    </div>
  );
};

export default DetailsForm;
