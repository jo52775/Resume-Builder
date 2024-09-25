import React from "react";
import html2pdf from "html2pdf.js";

interface DownloadHelperProps {
  containerClass: string;
  fileName?: string;
}

const DownloadHelper: React.FC<DownloadHelperProps> = ({
  containerClass,
  fileName = "resume.pdf",
}) => {
  const handleDownload = () => {
    const resumeContainer = document.querySelector(
      `.${containerClass}`
    ) as HTMLElement;

    if (!resumeContainer) {
      console.error("Resume container not found.");
      return;
    }

    resumeContainer.style.border = "none";

    const options = {
      filename: fileName,
      margin: [0.1, 0.1, 0, 0.1],
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf()
      .set(options)
      .from(resumeContainer)
      .save()
      .catch(() => console.error("Error generating PDF."))
      .finally(() => {
        resumeContainer.style.border = "1px solid black";
      });
  };

  return (
    <button
      className="btn-save download-resume-button"
      onClick={handleDownload}
    >
      <i className="fas fa-download" style={{ marginRight: "8px" }}></i>
      Download
    </button>
  );
};

export default DownloadHelper;
