import React, { useState } from "react";

const ExperienceForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    positionTitle: "",
    keyResponsibilities: "",
    startDate: "",
    endDate: "",
    city: "",
  });
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://localhost:5000/generate-experience",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
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

  const formatToBulletPoints = (text: string) =>
    text
      .split("\n")
      .map((line, index) => line.trim() && <li key={index}>{line}</li>);

  return (
    <div>
      <h2>Experience Form</h2>
      <form onSubmit={handleSubmit}>
        {["companyName", "positionTitle", "keyResponsibilities", "startDate", "endDate", "city"].map(
          (field) => (
            <div key={field}>
              <label htmlFor={field}>{field.replace(/([A-Z])/g, " $1")}</label>
              <input
                type="text"
                id={field}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                required
              />
            </div>
          )
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate from AI"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      {generatedContent && (
        <div>
          <h3>Generated Content:</h3>
          <ul>{formatToBulletPoints(generatedContent)}</ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceForm;