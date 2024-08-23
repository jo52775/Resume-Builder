import React, { FC, useState } from "react";
import "./ResumeSections.css";

interface ProjectsProps {
  nextView: () => void;
  prevView: () => void;
}

const Projects: FC<ProjectsProps> = ({ nextView, prevView }) => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projectLink, setProjectLink] = useState("");

  return (
    <div className="projects-form-container">
      <h2 className="projects-form-heading">Projects</h2>
      <button type="button" className="summary-btn summary-generate-ai-btn">
        Generate from AI
      </button>

      <form>
        <div className="projects-form-group">
          <label className="projects-form-label">Project Name</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="projects-form-control"
            required
          />
        </div>

        <div className="projects-form-group">
          <label className="projects-form-label">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="projects-form-control"
            rows={4}
            required
          />
        </div>

        <div className="projects-form-group">
          <label className="projects-form-label">Technologies Used</label>
          <input
            type="text"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            className="projects-form-control"
            required
          />
        </div>

        <div className="projects-form-group">
          <label className="projects-form-label">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="projects-form-control"
            required
          />
        </div>

        <div className="projects-form-group">
          <label className="projects-form-label">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="projects-form-control"
            required
          />
        </div>

        <div className="projects-form-group">
          <label className="projects-form-label">Project Link</label>
          <input
            type="url"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
            className="projects-form-control"
            required
          />
        </div>

        <div className="projects-form-buttons">
          <button type="submit" className="projects-btn projects-submit-btn">
            Submit
          </button>
        </div>
      </form>

      <div className="projects-form-buttons">
        <button
          type="button"
          onClick={prevView}
          className="projects-btn projects-back-btn"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextView}
          className="projects-btn projects-next-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
