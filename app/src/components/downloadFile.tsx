import React, { useState } from "react";
import html2pdf from "html2pdf.js";

interface DownloadHelperProps {
  containerID: string;
  fileName?: string;
}

const DownloadHelper: React.FC<DownloadHelperProps> = ({
  containerID,
  fileName,
}) => {
  const handleDownload = () => {
    const resumeContainer = document.querySelector(
      `#${containerID}`
    ) as HTMLElement;

    if (!resumeContainer) {
      console.error("Resume container not found.");
      return;
    }

    resumeContainer.style.border = "none";

    let documentDownloadName = "resume.pdf";
    
    if(fileName != ""){
      documentDownloadName = fileName +".pdf";
    }

    const options = {
      filename: documentDownloadName,
      margin: [0.1, 0.1, 0, 0.1],
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .set(options)
      .from(resumeContainer)
      .save()
      .catch(() => console.error("Error generating PDF."))
      .finally();
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
