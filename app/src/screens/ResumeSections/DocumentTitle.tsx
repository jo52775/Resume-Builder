import React, { FC, SetStateAction, useState, useEffect } from "react";
import "./ResumeSections.css";

interface DocumentTitleProps {
    nextView: () => void;
    documentTitle: string;
    setDocumentTitle: React.Dispatch<SetStateAction<string>>;
  }

const DocumentTitle: FC<DocumentTitleProps> = ({nextView, documentTitle, setDocumentTitle}) => {

    return(
        <div className="document-title-container">
            <h2 className="document-title-heading"> Resume Title </h2>
                <p className="form-descriptions"> To begin, please provide a title for this resume.</p>
                
                <form>
                    <label className="document-title-form-label"> Document Title </label>
                    <input
                        value={documentTitle}
                        onChange={(e) => setDocumentTitle(e.target.value)}
                        className="document-title-form-input"
                        placeholder="My ResumAI resume"
                        required
                    />
                    <div className="form-buttons">
                    <button type="button" onClick={nextView} className="btn btn-next">
                        Next
                    </button>
                    </div>
                </form>
        </div>
    )
}

export default DocumentTitle;