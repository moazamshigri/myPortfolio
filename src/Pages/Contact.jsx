import React, { useState } from "react";
import "./Contact.css";
import { contactData } from "../data";

const Contact = () => {
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  // Form state
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    service: "Web Design",
    message: "",
  });

  const [status, setStatus] = useState(""); // success/error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE}/contacts/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        service: "Web Design",
        message: "",
      });
      setStatus("Message sent successfully!");
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    }
  };

  const getContactIcon = (type) => {
    switch (type) {
      case "phone":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M6.6 10.8c1.6 3.2 3.4 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2 .7 3.1.9.5.1.8.5.8 1v3.4c0 .6-.5 1-1.1 1C11.3 22.3 1.7 12.7 1.7 1.9c0-.6.4-1.1 1-1.1H6c.5 0 .9.3 1 .8.2 1.1.5 2.1.9 3.1.1.4 0 .9-.3 1.2L6.6 10.8Z"
              fill="currentColor"
            />
          </svg>
        );
      case "email":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25V6.75Zm2.55-.75 5.12 4.05c.2.16.48.16.68 0L17.45 6H6.55ZM18 7.3l-4.63 3.67c-.76.6-1.86.6-2.62 0L6 7.3v9.95c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75V7.3Z"
              fill="currentColor"
            />
          </svg>
        );
      case "address":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2.25c-3.86 0-7 3.08-7 6.9 0 5.06 6.03 11.76 6.28 12.04.4.44 1.05.44 1.45 0 .25-.28 6.27-6.98 6.27-12.04 0-3.82-3.13-6.9-7-6.9Zm0 10a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Z"
              fill="currentColor"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-page-inner">
        <header className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Any question or remarks? Just write us a message!
          </p>
        </header>

        <div className="contact-card">
          {/* Left: Contact information */}
          <aside className="contact-info" aria-label="Contact information">
            <div className="contact-info-top">
              <h2 className="contact-info-title">Contact Information</h2>
              <p className="contact-info-text">
                Fill up the form and our team will get back to you within 24
                hours.
              </p>
            </div>

            <ul className="contact-info-list">
              {contactData.contactInfo.map((info, index) => (
                <li key={index} className="contact-info-item">
                  <span className="contact-icon" aria-hidden="true">
                    {getContactIcon(info.type)}
                  </span>
                  <span className="contact-info-value">{info.value}</span>
                </li>
              ))}
            </ul>

            <div className="contact-social" aria-label="Social links">
              {contactData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  className={`social-link ${
                    social.accent ? "social-link-accent" : ""
                  }`}
                  href={social.href}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="contact-decor" aria-hidden="true">
              <span className="contact-circle contact-circle-1" />
              <span className="contact-circle contact-circle-2" />
            </div>
          </aside>

          {/* Right: Form */}
          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-grid">
                <label className="field">
                  <span className="field-label">First Name</span>
                  <input
                    className="field-input"
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </label>

                <label className="field">
                  <span className="field-label">Last Name</span>
                  <input
                    className="field-input"
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </label>

                <label className="field">
                  <span className="field-label">Mail</span>
                  <input
                    className="field-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>

                <label className="field">
                  <span className="field-label">Phone</span>
                  <input
                    className="field-input"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <fieldset className="contact-options">
                <legend className="options-title">
                  What type of website do you need?
                </legend>

                <div className="options-row">
                  {["Web Design", "Web Development", "Logo Design", "Other"].map(
                    (option) => (
                      <label key={option} className="option">
                        <input
                          type="radio"
                          name="service"
                          value={option}
                          checked={formData.service === option}
                          onChange={handleChange}
                        />
                        <span className="option-dot" aria-hidden="true" />
                        <span className="option-label">{option}</span>
                      </label>
                    )
                  )}
                </div>
              </fieldset>

              <label className="field field-message">
                <span className="field-label">Message</span>
                <textarea
                  className="field-input field-textarea"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                />
              </label>

              <div className="contact-actions">
                <button type="submit" className="contact-submit">
                  Send Message
                </button>
              </div>

              {status && <p className="contact-status">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
