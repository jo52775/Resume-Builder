import React, { FC, SetStateAction, useState } from "react";
import "./ResumeSections.css";

type ContactFormType = {
  firstName: string;
  lastName: string;
  city: string;
  phoneNumber: string;
  email: string;
  link: string;
};

interface ContactProps {
  prevView: () => void;
  nextView: () => void;
  formData: ContactFormType;
  setFormData: React.Dispatch<SetStateAction<ContactFormType>>;
}

const Contact: FC<ContactProps> = ({ prevView, nextView, formData, setFormData }) => {
  return (
    <div className="contact-info-form-container">
      <h2 className="contact-info-form-heading">Contact</h2>

      <form>
        <div className="contact-info-form-group">
          <p className="form-descriptions">
            Adding your contact details ensures employers can easily reach out
            to you.
          </p>
          <label className="contact-info-form-label">First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
            className="contact-info-form-control"
            required
          />
        </div>

        <div className="contact-info-form-group">
          <label className="contact-info-form-label">Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
            className="contact-info-form-control"
            required
          />
        </div>

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

export default Contact;
