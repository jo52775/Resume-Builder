import React, { FC } from "react";

type ContactFormType = {
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
      <p className="section-content">
        {formData.city} | {formData.phoneNumber} | {formData.email} |
        {formData.link && (
          <a href={formData.link} target="_blank" className="contact-link">
            {" "}
            {formData.link}
          </a>
        )}
      </p>
    </div>
  );
};

export default ResumeContact;
