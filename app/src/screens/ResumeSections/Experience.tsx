import React, { FC, SetStateAction, useState } from "react";
import "./ResumeSections.css";
import TextEditor from "../../components/TextEditor";

type ExperienceFormType = {
  companyName: string;
  positionTitle: string;
  keyResponsibilities: string;
  startDate: string;
  endDate: string;
  city: string;
};

interface ExperienceProps {
  nextView: () => void;
  prevView: () => void;
  formData: ExperienceFormType;
  setFormData: React.Dispatch<SetStateAction<ExperienceFormType>>;
}

const Experience: FC<ExperienceProps> = ({
  nextView,
  prevView,
  formData,
  setFormData,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedContent, setGeneratedContent] = useState<string>("");

  const handleGenerateAI = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://localhost:5000/generate-experience",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            companyName: formData.companyName,
            positionTitle: formData.positionTitle,
            keyResponsibilities: formData.keyResponsibilities,
            startDate: formData.startDate,
            endDate: formData.endDate,
            city: formData.city,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to generate content");

      const data = await response.json();
      setFormData((prev) => ({
        ...prev,
        keyResponsibilities: data.content,
      }));

      {
        /*setGeneratedContent(data.content);*/
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="experience-form-container">
      <h2 className="experience-form-heading">Experience</h2>
      <p className="form-descriptions">
        Share your past work and achievements to impress employers. Use clear
        examples and strong action verbs to show what you bring to the table.
      </p>
      <button
        type="button"
        onClick={handleGenerateAI}
        className="btn btn-ai"
        disabled={loading}
      >
        {loading ? "Generating..." : "⟡ Write with AI"}
      </button>

      {error && <div className="error-message">{error}</div>}
      {generatedContent && (
        <div className="generated-content">{generatedContent}</div>
      )}

      <form>
        <div className="experience-form-group">
          <label className="experience-form-label">Company Name</label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                companyName: e.target.value,
              }))
            }
            className="experience-form-control"
            required
          />
        </div>

        <div className="experience-form-group">
          <label className="experience-form-label">Position Title</label>
          <input
            type="text"
            value={formData.positionTitle}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                positionTitle: e.target.value,
              }))
            }
            className="experience-form-control"
            required
          />
        </div>

        <div className="experience-form-group">
          <label className="experience-form-label">Key Responsibilities</label>
          <TextEditor
            content={formData.keyResponsibilities}
            setContent={(value) =>
              setFormData((prev) => ({
                ...prev,
                keyResponsibilities: value,
              }))
            }
          />
        </div>

        <div className="experience-form-group">
          <label className="experience-form-label">Start Date</label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                startDate: e.target.value,
              }))
            }
            className="experience-form-control"
            required
          />
        </div>

        <div className="experience-form-group">
          <label className="experience-form-label">End Date</label>
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                endDate: e.target.value,
              }))
            }
            className="experience-form-control"
            required
          />
        </div>

        <div className="experience-form-group">
          <label className="experience-form-label">City</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                city: e.target.value,
              }))
            }
            className="experience-form-control"
            required
          />
        </div>
        <div className="form-buttons">
          <button type="button" onClick={prevView} className="btn btn-back">
            Back
          </button>
          <button type="button" onClick={nextView} className="btn btn-next">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Experience;
