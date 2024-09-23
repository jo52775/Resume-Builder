import React, { FC, SetStateAction, useState, useEffect } from "react";
import "./ResumeSections.css";

interface SkillsProps {
  prevView: () => void;
  formData: string[];
  setFormData: React.Dispatch<SetStateAction<string[]>>;
}

const Skills: FC<SkillsProps> = ({ prevView, formData, setFormData }) => {
  const [skill, setSkill] = useState("");

  const addSkillToArray = () => {
    setFormData((prev) => [...prev, skill]);
    setSkill("");
  };

  const removeSkillFromArray = (skillToRemove: string) => {
    setFormData((prev) =>
      prev.filter((listItem) => listItem !== skillToRemove)
    );
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="skills-form-container">
      <h2 className="skills-form-heading">Skills</h2>
      <p className="form-descriptions">
        Share your key professional skills that are most relevant to the job.
      </p>
      <form onSubmit={handleFormSubmit}>
        <div className="skills-form-group">
          <label className="skills-form-label">Skill</label>
          <input
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="skills-form-control"
            required
          />
          <button
            type="submit"
            className="btn btn-submit"
            onClick={addSkillToArray}
          >
            {" "}
            + Add skill{" "}
          </button>
        </div>
      </form>

      <div className="interactive-skills-list">
        <h3> Skills List </h3>
        <ul>
          {formData.map((item) => (
            <li>
              {" "}
              {item}{" "}
              <button
                className="btn btn-submit"
                onClick={() => removeSkillFromArray(item)}
              >
                {" "}
                – Remove skill{" "}
              </button>{" "}
            </li>
          ))}
        </ul>
      </div>

      <div className="form-buttons">
        <button type="button" onClick={prevView} className="btn btn-back">
          Back
        </button>
      </div>
    </div>
  );
};

export default Skills;
