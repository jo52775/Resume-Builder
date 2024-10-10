import React, { FC } from "react";

type ContactFormType = {
  firstName: string;
  lastName: string;
  city: string;
  phoneNumber: string;
  email: string;
  link: string;
};

interface ResumeContactProps {
  formData: ContactFormType;
}

const ResumeContact: FC<ResumeContactProps> = ({ formData }) => {
  return (
    <div className="resume-section contact-info">
      <div className="contact-name-row">
        <h2 className="contact-name">
          {formData.firstName} {formData.lastName}
        </h2>
      </div>
      <div className="contact-details-row">
        <p className="section-content">
          {[formData.city, formData.phoneNumber, formData.email]
            .filter(Boolean)
            .join(" | ")}
          {formData.link && (
            <>
              {" | "}
              <a
                href={formData.link}
                target="_blank"
                className="contact-link"
                rel="noopener noreferrer"
              >
                {formData.link}
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default ResumeContact;
