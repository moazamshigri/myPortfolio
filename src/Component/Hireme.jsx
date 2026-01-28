import React from "react";
import "./Hireme.css";
import { hiremeData } from "../data";

const Hireme = () => {
  return (
    <section className="hireme-section">
      <div className="hireme-container">
        <div className="hireme-grid">
          {/* Left image */}
          <div className="hireme-image">
            <div className="hireme-image-blob" aria-hidden="true" />
            <img
              src={hiremeData.image}
              alt="Professional portrait"
              className="hireme-person"
            />
          </div>

          {/* Right content */}
          <div className="hireme-content">
            <h2 className="hireme-title">
              Why <span className="hireme-accent">Hire me</span>?
            </h2>

            <p className="hireme-description">{hiremeData.description}</p>

            <div className="hireme-stats">
              {hiremeData.stats.map((stat, index) => (
                <div key={index} className="hireme-stat">
                  <div className="hireme-stat-value">{stat.value}</div>
                  <div className="hireme-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <button type="button" className="hireme-btn">
              Hire me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
