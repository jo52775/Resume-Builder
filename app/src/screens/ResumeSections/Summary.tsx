import React, { FC, useState } from "react";
import "./ResumeSections.css";

interface SummaryProps {
  nextView: () => void;
}

const Summary: FC<SummaryProps> = ({ nextView }) => {
  const [summary, setSummary] = useState("");

  return (
    <div className="summary-form-container">
      <h2 className="summary-form-heading">Summary</h2>
      <button type="button" className="summary-btn summary-generate-ai-btn">
        Generate from AI
      </button>

      <form>
        <div className="summary-form-group">
          <label className="summary-form-label">Summary</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="summary-form-control"
            rows={6}
            required
          />
        </div>
        <button type="submit" className="education-btn education-submit-btn">
          Submit
        </button>
        <div className="summary-form-buttons">
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

export default Summary;
