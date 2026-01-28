import React from "react";
import "./Section2.css";
import { workExperienceData } from "../data";

const Section2 = () => {
  return (
    <section className="work-experience-section">
      <div className="work-experience-container">
        {/* Title */}
        <h2 className="work-experience-title">
          <span className="title-part-1">My Work</span>{" "}
          <span className="title-part-2">Experience</span>
        </h2>

        {/* Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline">
            {workExperienceData.experiences.map((exp, index) => (
              <div key={exp.id} className="timeline-item">
                {/* Left Column - Company Details */}
                <div className="timeline-left">
                  <div className="company-name">{exp.company}</div>
                  <div className="company-dates">{exp.dates}</div>
                </div>

                {/* Center - Timeline Node and Line */}
                <div className="timeline-center">
                  <div
                    className={`timeline-node ${exp.nodeType}`}
                    aria-label={`Timeline marker for ${exp.company}`}
                  ></div>
                  {index < workExperienceData.experiences.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>

                {/* Right Column - Role Details */}
                <div className="timeline-right">
                  <div className="role-title">{exp.role}</div>
                  {exp.description && (
                    <div className="role-description">{exp.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
