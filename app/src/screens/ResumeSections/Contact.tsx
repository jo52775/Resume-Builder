import React, { FC, useState } from "react";
import "./ResumeSections.css";

interface ContactInformationProps {
  nextView: () => void;
}

const ContactInformation: FC<ContactInformationProps> = ({ nextView }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [personalWebsite, setPersonalWebsite] = useState("");

  return (
    <div className="contact-info-form-container">
      <h2 className="contact-info-form-heading">Contact Information</h2>

      <form>
        <div className="contact-info-form-group">
          <label className="contact-info-form-label">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="contact-info-form-control"
            required
          />
        </div>

        <div className="contact-info-form-group">
          <label className="contact-info-form-label">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="contact-info-form-control"
            required
          />
        </div>

        <div className="contact-info-form-group">
          <label className="contact-info-form-label">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="contact-info-form-control"
            required
          />
        </div>

        <div className="contact-info-form-group">
          <label className="contact-info-form-label">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="contact-info-form-control"
            required
          />
        </div>

        <div className="contact-info-form-group">
          <label className="contact-info-form-label">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="contact-info-form-control"
          />
        </div>

        <div className="contact-info-form-group">
          <label className="contact-info-form-label">LinkedIn</label>
          <input
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="contact-info-form-control"
          />
        </div>

        <div className="contact-info-form-group">
          <label className="contact-info-form-label">GitHub</label>
          <input
            type="url"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="contact-info-form-control"
          />
        </div>

        <div className="contact-info-form-group">
          <label className="contact-info-form-label">Personal Website</label>
          <input
            type="url"
            value={personalWebsite}
            onChange={(e) => setPersonalWebsite(e.target.value)}
            className="contact-info-form-control"
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
          <button type="button" onClick={nextView} className="btn btn-next">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInformation;
