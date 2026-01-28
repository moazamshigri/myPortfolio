import React, { useState, useEffect } from "react";
import "./Services.css";
import { servicesData as initialServicesData } from "../data";

const Services = () => {
  // API-ready data structure - can be replaced with API calls later
  const [servicesData, setServicesData] = useState(initialServicesData.services);

  // Simulate API loading (can be replaced with actual API call)
  useEffect(() => {
    // Example: fetchServicesData().then(data => setServicesData(data.services));
  }, []);

  return (
    <section className="services-page">
      <div className="services-container">
        {/* Header */}
        <header className="services-header">
          <h1 className="services-title">Services</h1>
          <p className="services-subtitle">What I can do for you</p>
          <p className="services-description">
            I offer a comprehensive range of services to help bring your digital
            vision to life. From concept to deployment, I'm here to make it happen.
          </p>
        </header>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                <span className="service-icon">{service.icon}</span>
                <div className="service-icon-blob" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="service-footer">
                <button className="service-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
