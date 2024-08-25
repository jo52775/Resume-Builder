import React, { FC, useState } from "react";
import "./ResumeSections.css";

interface SummaryProps {
  nextView: () => void;
  prevView: () => void;
}

const Summary: FC<SummaryProps> = ({ nextView, prevView }) => {
  const [summary, setSummary] = useState("");

  return (
    <div className="summary-form-container">
      <h2 className="summary-form-heading">Summary</h2>
      <button type="button" className="btn btn-ai">
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
        <div className="form-buttons">
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
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
