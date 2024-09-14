import React, { FC, SetStateAction, useState } from "react";
import "./ResumeSections.css";

type ContactFormType = {
  city: string;
  phoneNumber: string;
  email: string;
  link: string;
};

interface ContactProps {
  nextView: () => void;
  formData: ContactFormType;
  setFormData: React.Dispatch<SetStateAction<ContactFormType>>;
}

const Contact: FC<ContactProps> = ({ nextView, formData, setFormData }) => {
  return (
    <div className="contact-info-form-container">
      <h2 className="contact-info-form-heading">Contact Information</h2>

      <form>
        <div className="contact-info-form-group">
          <label className="contact-info-form-label">City</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                city: e.target.value,
              }))
            }
            className="contact-info-form-control"
            required
          />
        </div>

        <div className="contact-info-form-group">
          <label className="contact-info-form-label">Phone Number</label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                phoneNumber: e.target.value,
              }))
            }
            className="contact-info-form-control"
          />
        </div>

        <div className="contact-info-form-group">
          <label className="contact-info-form-label">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            className="contact-info-form-control"
            required
          />
        </div>

        <div className="contact-info-form-group">
          <label className="contact-info-form-label">Link</label>
          <input
            type="url"
            value={formData.link}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                link: e.target.value,
              }))
            }
            className="contact-info-form-control"
          />
        </div>

        <div className="form-buttons">
          <button type="button" onClick={nextView} className="btn btn-next">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
