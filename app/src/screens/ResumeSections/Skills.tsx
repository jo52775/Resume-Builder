import React, { FC, useState } from "react";
import "./ResumeSections.css";

interface SkillsProps {
  prevView: () => void;
}

const Skills: FC<SkillsProps> = ({ prevView }) => {
  const [skills, setSkills] = useState("");

  return (
    <div className="skills-form-container">
      <h2 className="skills-form-heading">Skills</h2>
      <button type="button" className="btn btn-ai">
        Generate from AI
      </button>

      <form>
        <div className="skills-form-group">
          <label className="skills-form-label">Skills</label>
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="skills-form-control"
            rows={6}
            required
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
        </div>
      </form>
      <div className="form-buttons">
        <button type="button" onClick={prevView} className="btn btn-back">
          Back
        </button>
      </div>
    </div>
  );
};

export default Skills;
