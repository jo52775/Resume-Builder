import React, { FC, SetStateAction, useState, useEffect } from "react";
import "./ResumeSections.css";

interface SkillsProps {
  prevView: () => void;
  formData: string[];
  setFormData: React.Dispatch<SetStateAction<string[]>>;
  jobTitle: string;
  jobDescription: string;
}

const Skills: FC<SkillsProps> = ({
  prevView,
  formData,
  setFormData,
  jobTitle,
  jobDescription,
}) => {
  const [skill, setSkill] = useState("");
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([]);

  const addSkillToArray = () => {
    if (skill && !formData.includes(skill)) {
      setFormData((prev) => [...prev, skill]);
      setSkill("");
    }
  };

  const removeSkillFromArray = (skillToRemove: string) => {
    setFormData((prev) =>
      prev.filter((listItem) => listItem !== skillToRemove)
    );
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    addSkillToArray();
  };

  useEffect(() => {
    const fetchSuggestedSkills = async () => {
      try {
        const response = await fetch("http://localhost:5000/generate-skills", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ jobTitle, jobDescription }),
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Skills API Response:", data);
        setSuggestedSkills(data.skills);
      } catch (err) {
        console.error("Error fetching skills suggestions", err);
      }
    };

    if (jobTitle && jobDescription) {
      fetchSuggestedSkills();
    }
  }, [jobTitle, jobDescription]);

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
          <button type="submit" className="btn btn-submit">
            + Add skill
          </button>
        </div>
      </form>

      <div className="suggested-skills-list">
        <h3>Suggested Skills</h3>
        <ul>
          {suggestedSkills.map((suggestedSkill) => (
            <li key={suggestedSkill}>
              {suggestedSkill}
              <button
                className="btn btn-add-skill"
                onClick={() => {
                  if (!formData.includes(suggestedSkill)) {
                    setFormData((prev) => [...prev, suggestedSkill]);
                  }
                }}
              >
                + Add
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="interactive-skills-list">
        <h3>Skills List</h3>
        <ul>
          {formData.map((item) => (
            <li key={item}>
              {item}
              <button
                className="btn btn-submit"
                onClick={() => removeSkillFromArray(item)}
              >
                – Remove skill
              </button>
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
