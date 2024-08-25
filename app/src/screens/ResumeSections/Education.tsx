import React, { FC, useState } from "react";
import "./ResumeSections.css";

interface EducationProps {
  nextView: () => void;
  prevView: () => void;
}

const Education: FC<EducationProps> = ({ nextView, prevView }) => {
  const [degreeLevel, setDegreeLevel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="education-form-container">
      <h2 className="education-form-heading">Education</h2>

      <form>
        <div className="education-form-group">
          <label className="education-form-label">Institution Name</label>
          <input type="text" required className="education-form-control" />
        </div>
        <div className="education-form-group">
          <label className="education-form-label">Major</label>
          <input type="text" className="education-form-control" />
        </div>
        <div className="education-form-group">
          <label className="education-form-label">Degree Level</label>
          <select
            value={degreeLevel}
            onChange={(e) => setDegreeLevel(e.target.value)}
            className="education-form-control"
          >
            <option value="">Select an option</option>
            <option value="bachelors">Bachelors</option>
            <option value="masters">Masters</option>
            <option value="doctorate">Doctorate</option>
            <option value="associate">Associate</option>
          </select>
        </div>
        <div className="education-form-group">
          <label className="education-form-label">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="education-form-control"
          />
        </div>
        <div className="education-form-group">
          <label className="education-form-label">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="education-form-control"
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
        <button type="button" onClick={nextView} className="btn btn-next">
          Next
        </button>
      </div>
    </div>
  );
};

export default Education;
