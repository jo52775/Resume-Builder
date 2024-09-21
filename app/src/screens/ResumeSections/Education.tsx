import React, { FC, SetStateAction, useState, useEffect } from "react";
import "./ResumeSections.css";

type EducationFormType = {
  institutionName: string;
  major: string;
  startDate: string;
  endDate: string;
};

interface EducationProps {
  nextView: () => void;
  prevView: () => void;
  formData: EducationFormType;
  setFormData: React.Dispatch<SetStateAction<EducationFormType>>;
}

const Education: FC<EducationProps> = ({
  nextView,
  prevView,
  formData,
  setFormData,
}) => {
  return (
    <div className="education-form-container">
      <h2 className="education-form-heading">Education</h2>

      <form>
        <div className="education-form-group">
          <label className="education-form-label">Institution Name</label>
          <input
            type="text"
            value={formData.institutionName}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                institutionName: e.target.value,
              }))
            }
            required
            className="education-form-control"
          />
        </div>
        <div className="education-form-group">
          <label className="education-form-label">Degree, Major</label>
          <input
            type="text"
            value={formData.major}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                major: e.target.value,
              }))
            }
            className="education-form-control"
          />
        </div>
        <div className="education-form-group">
          <label className="education-form-label">Start Date</label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                startDate: e.target.value,
              }))
            }
            className="education-form-control"
          />
        </div>
        <div className="education-form-group">
          <label className="education-form-label">End Date</label>
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                endDate: e.target.value,
              }))
            }
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
