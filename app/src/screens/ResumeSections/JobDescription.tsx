import React, { FC, SetStateAction } from "react";
import "./ResumeSections.css";

type JobDescriptionFormType = {
  jobTitle: string;
  jobDescription: string;
};

interface JobDescriptionProps {
  nextView: () => void;
  prevView: () => void;
  formData: JobDescriptionFormType;
  setFormData: React.Dispatch<SetStateAction<JobDescriptionFormType>>;
}

const JobDescription: FC<JobDescriptionProps> = ({
  nextView,
  prevView,
  formData,
  setFormData,
}) => {
  return (
    <div className="job-description-form-container">
      <h2 className="job-description-form-heading">Job Description</h2>
      <p className="form-descriptions">
        Please provide the job title and a brief description of your
        responsibilities and achievements.
      </p>
      <form>
        <div className="job-description-form-group">
          <label className="job-description-form-label">Job Title</label>
          <input
            type="text"
            value={formData.jobTitle}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                jobTitle: e.target.value,
              }))
            }
            required
            className="job-description-form-control"
          />
        </div>

        <div className="job-description-form-group">
          <label className="job-description-form-label">Job Description</label>
          <textarea
            value={formData.jobDescription}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                jobDescription: e.target.value,
              }))
            }
            className="job-description-form-control description-input"
            placeholder="Describe your responsibilities and achievements"
          />
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

export default JobDescription;
