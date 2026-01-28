import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { heroData } from "../data";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Greeting Bubble */}
        <div className="greeting-bubble">
          <span>Hello!</span>
          <div className="spark-icons">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8L10 2Z"
                fill="#FD853A"
              />
            </svg>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8L10 2Z"
                fill="#FD853A"
              />
            </svg>
          </div>
        </div>

        {/* Main Title */}
        <div className="hero-title">
          <h1>
            I'm <span className="name-highlight">{heroData.name},</span>
          </h1>
          <div className="title-line">
            <svg
              className="spark-left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z"
                fill="#FD853A"
              />
            </svg>
            <h1>{heroData.title}</h1>
            <svg
              className="spark-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z"
                fill="#FD853A"
              />
            </svg>
          </div>
        </div>

        {/* Central Person Image */}
        <div className="hero-image-wrapper">
          <img
            src={heroData.image}
            alt={`${heroData.name} - ${heroData.title}`}
            className="hero-person-image"
          />
          {/* Orange Background Curve */}
           
              <div className="hero-orange-curve"></div>
        </div>

        {/* Testimonial Section - Left */}
        <div className="testimonial-section">
          <div className="quote-icon">"</div>
          <p className="testimonial-text">
            {heroData.testimonial.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < heroData.testimonial.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>

        {/* Experience Section - Right */}
        <div className="experience-section">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#FD853A"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ))}
          </div>
          <div className="years-text">{heroData.experienceYears}</div>
          <div className="experience-label">Experience</div>
        </div>
            

        {/* CTA Buttons */}
        <div className="hero-cta-buttons">
          <Link to="/project" className="btn-portfolio">
            Portfolio
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L12 4M12 4H6M12 4V10"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link to="/contact" className="btn-hire-me">
            Hire me
          </Link>
        </div>

       
      </div>
    </section>
  );
};

export default Hero;
