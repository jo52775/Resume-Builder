import React, { FC, useState } from "react";
import "./ResumeSections.css";

interface ExperienceProps {
  nextView: () => void;
  prevView: () => void;
}

const Experience: FC<ExperienceProps> = ({ nextView, prevView }) => {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [keyResponsibilities, setKeyResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [city, setCity] = useState("");

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
            companyName,
            positionTitle,
            keyResponsibilities,
            startDate,
            endDate,
            city,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to generate content");

      const data = await response.json();
      setGeneratedContent(data.content);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="experience-form-container">
      <h2 className="experience-form-heading">Experience</h2>
      <button
        type="button"
        onClick={handleGenerateAI}
        className="summary-btn summary-generate-ai-btn"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate from AI"}
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
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="experience-form-control"
            required
          />
        </div>

        <div className="experience-form-group">
          <label className="experience-form-label">Position Title</label>
          <input
            type="text"
            value={positionTitle}
            onChange={(e) => setPositionTitle(e.target.value)}
            className="experience-form-control"
            required
          />
        </div>

        <div className="experience-form-group">
          <label className="experience-form-label">Key Responsibilities</label>
          <textarea
            value={keyResponsibilities}
            onChange={(e) => setKeyResponsibilities(e.target.value)}
            className="experience-form-control"
            rows={6}
            required
          />
        </div>

        <div className="experience-form-group">
          <label className="experience-form-label">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="experience-form-control"
            required
          />
        </div>

        <div className="experience-form-group">
          <label className="experience-form-label">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="experience-form-control"
            required
          />
        </div>

        <div className="experience-form-group">
          <label className="experience-form-label">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="experience-form-control"
            required
          />
        </div>
        <button type="submit" className="education-btn education-submit-btn">
          Submit
        </button>
        <div className="experience-form-buttons">
          <button
            type="button"
            onClick={prevView}
            className="summary-btn summary-back-btn"
          >
            Back
          </button>
          <button
            type="button"
            onClick={nextView}
            className="summary-btn summary-next-btn"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Experience;
