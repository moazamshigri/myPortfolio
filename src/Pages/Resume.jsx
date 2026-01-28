import React, { useState, useEffect } from "react";
import "./Resume.css";
import { resumeData as initialResumeData } from "../data";

const Resume = () => {
  // API-ready data structure - can be replaced with API calls later
  const [resumeData, setResumeData] = useState(initialResumeData);

  // Simulate API loading (can be replaced with actual API call)
  useEffect(() => {
    // Example: fetchResumeData().then(setResumeData);
  }, []);

  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = resumeData.resumeUrl;
    link.download = resumeData.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume-page">
      <div className="resume-container">
        {/* Header */}
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-subtitle">Download my resume</p>
          <p className="resume-description">
            Get a copy of my resume to learn more about my experience, skills, and
            qualifications.
          </p>
        </header>

        {/* Download Section */}
        <div className="resume-download-section">
          <div className="resume-card">
            <div className="resume-icon-wrapper">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="resume-icon"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <div className="resume-icon-blob" />
            </div>
            <h2 className="resume-card-title">Ready to Download</h2>
            <p className="resume-card-description">
              Click the button below to download my resume in PDF format.
            </p>
            <button
              onClick={handleDownload}
              className="resume-download-button"
              aria-label={`Download ${resumeData.fileName}`}
            >
              <span>Download Resume</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
            <p className="resume-file-info">
              File: <span>{resumeData.fileName}</span>
            </p>
          </div>

          {/* Additional Info */}
          <div className="resume-info-grid">
            <div className="resume-info-card">
              <div className="info-icon">📄</div>
              <h3 className="info-title">PDF Format</h3>
              <p className="info-text">
                Professional resume in PDF format, ready to share with employers
              </p>
            </div>
            <div className="resume-info-card">
              <div className="info-icon">🔄</div>
              <h3 className="info-title">Always Updated</h3>
              <p className="info-text">
                My resume is regularly updated with the latest projects and
                experiences
              </p>
            </div>
            <div className="resume-info-card">
              <div className="info-icon">📧</div>
              <h3 className="info-title">Contact Me</h3>
              <p className="info-text">
                Have questions? Feel free to reach out through the contact page
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
