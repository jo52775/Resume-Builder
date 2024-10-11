import React, { FC, SetStateAction, useState } from "react";
import "./ResumeSections.css";
import TextEditor from "../../components/TextEditor";

interface SummaryProps {
  nextView: () => void;
  prevView: () => void;
  formData: string;
  setFormData: React.Dispatch<SetStateAction<string>>;
}

const Summary: FC<SummaryProps> = ({
  nextView,
  prevView,
  formData,
  setFormData,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateSummary = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/generate-summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          summary: formData,
        }),
      });

      if (!response.ok) throw new Error("Failed to generate content");

      const data = await response.json();
      setFormData(data.content);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="summary-form-container">
      <h2 className="summary-form-heading">Summary</h2>
      <p className="form-descriptions">
        Give a brief overview of your career and skills to grab employers'
        attention. Focus on what makes you a great candidate.
      </p>
      <button
        type="button"
        className="btn btn-ai"
        disabled={loading}
        onClick={handleGenerateSummary}
      >
        {loading ? "Generating..." : "⟡ Write with AI"}
      </button>

      {error && <div className="error-message">{error}</div>}

      <form>
        <div className="summary-form-group">
          <label className="summary-form-label">Summary</label>
          <TextEditor content={formData} setContent={setFormData} />
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

export default Summary;
