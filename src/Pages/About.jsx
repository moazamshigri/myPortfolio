import React, { useState, useEffect } from "react";
import "./About.css";
import { aboutData as initialAboutData } from "../data";

const About = () => {
  // API-ready data structure - can be replaced with API calls later
  const [aboutData, setAboutData] = useState(initialAboutData);

  // Simulate API loading (can be replaced with actual API call)
  useEffect(() => {
    // Example: fetchAboutData().then(setAboutData);
  }, []);

  return (
    <section className="about-page">
      <div className="about-container">
        {/* Header */}
        <header className="about-header">
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">
            Passionate Software Engineer crafting digital experiences
          </p>
        </header>

        {/* Main Content */}
        <div className="about-content">
          {/* Text Content */}
          <div className="about-text-section">
            <p className="about-description">{aboutData.description}</p>

            {/* Stats */}
            <div className="about-stats">
              {aboutData.stats.map((stat, index) => (
                <div key={index} className="about-stat-card">
                  <div className="about-stat-value">{stat.value}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <section className="about-skills">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {aboutData.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Experience */}
        <div className="about-timeline-section">
          <div className="timeline-column">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
              {aboutData.education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3 className="timeline-title">{edu.degree}</h3>
                    <p className="timeline-subtitle">{edu.field}</p>
                    <p className="timeline-institution">{edu.institution}</p>
                    <span className="timeline-year">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="timeline-column">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              {aboutData.experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3 className="timeline-title">{exp.role}</h3>
                    <p className="timeline-subtitle">{exp.company}</p>
                    <p className="timeline-description">{exp.description}</p>
                    <span className="timeline-year">{exp.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
