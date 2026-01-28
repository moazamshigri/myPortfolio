import React, { useState, useEffect } from "react";
import "./Projects.css";
import { projectsData as initialProjectsData } from "../data";

const Projects = () => {
  // API-ready data structure - can be replaced with API calls later
  const [projectsData, setProjectsData] = useState(initialProjectsData.projects);

  const [filter, setFilter] = useState("All");

  // Simulate API loading (can be replaced with actual API call)
  useEffect(() => {
    // Example: fetchProjectsData().then(data => setProjectsData(data.projects));
  }, []);

  // Get unique categories for filter
  const categories = [
    "All",
    ...new Set(projectsData.map((p) => p.category)),
  ];

  // Filter projects based on selected category
  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section className="projects-page">
      <div className="projects-container">
        {/* Header */}
        <header className="projects-header">
          <h1 className="projects-title">Projects</h1>
          <p className="projects-subtitle">My recent work</p>
          <p className="projects-description">
            Explore a collection of projects I've worked on, showcasing my skills
            and expertise in web development, design, and innovation.
          </p>
        </header>

        {/* Filter Buttons */}
        <div className="projects-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${filter === category ? "active" : ""}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title}`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="project-category-badge">{project.category}</div>
              </div>
              <div className="project-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
