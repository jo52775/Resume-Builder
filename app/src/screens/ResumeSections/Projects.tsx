import React, { FC, SetStateAction, useState } from "react";
import "./ResumeSections.css";
import TextEditor from "../../components/TextEditor";

type ProjectsFormType = {
  projectType: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
};

interface ProjectsProps {
  nextView: () => void;
  prevView: () => void;
  formData: ProjectsFormType;
  setFormData: React.Dispatch<SetStateAction<ProjectsFormType>>;
}

const Projects: FC<ProjectsProps> = ({
  nextView,
  prevView,
  formData,
  setFormData,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateAI = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/generate-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectType: formData.projectType,
          name: formData.name,
          description: formData.description,
          startDate: formData.startDate,
          endDate: formData.endDate,
        }),
      });

      if (!response.ok) throw new Error("Failed to generate content");

      const data = await response.json();
      setFormData((prev) => ({
        ...prev,
        description: data.content,
      }));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="projects-form-container">
      <h2 className="projects-form-heading">{formData.projectType}</h2>
      <p className="form-descriptions">
        Highlight your projects, volunteering, or extracurriculars to showcase
        your skills and interests. Describe your roles and contributions to
        demonstrate your qualifications and commitment.
      </p>
      <select
        value={formData.projectType}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            projectType: e.target.value,
          }))
        }
        className="projects-form-control"
      >
        <option value="">Select a Header</option>
        <option value="Projects">Projects</option>
        <option value="Volunteering">Volunteering</option>
        <option value="Extracurriculars">Extracurriculars</option>
      </select>

      <button
        type="button"
        onClick={handleGenerateAI}
        className="btn btn-ai"
        disabled={loading}
      >
        {loading ? "Generating..." : "⟡ Write with AI"}
      </button>

      <form>
        <div className="projects-form-group">
          <label className="projects-form-label">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            className="projects-form-control"
            required
          />
        </div>

        <div className="projects-form-group">
          <label className="projects-form-label">Description</label>
          <TextEditor
            content={formData.description}
            setContent={(value) =>
              setFormData((prev) => ({
                ...prev,
                description: value,
              }))
            }
          />
        </div>

        <div className="projects-form-group">
          <label className="projects-form-label">Start Date</label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                startDate: e.target.value,
              }))
            }
            className="projects-form-control"
            required
          />
        </div>

        <div className="projects-form-group">
          <label className="projects-form-label">End Date</label>
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                endDate: e.target.value,
              }))
            }
            className="projects-form-control"
            required
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

export default Projects;
