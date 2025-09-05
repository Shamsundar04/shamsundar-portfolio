import React from "react";
import "./AboutPage.css"; // We'll create this next

function AboutPage() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate Java developer with a love for building
            efficient and scalable back-end systems. My journey into programming
            started with a fascination for how complex applications work, which
            led me to dive deep into the world of software architecture.
          </p>
          <p>
            I thrive on solving complex problems and am constantly learning new
            technologies to improve my craft. When I'm not coding, I enjoy
            reading tech blogs and contributing to open-source projects.
          </p>
        </div>
        <div className="about-skills">
          <h3>My Tech Stack</h3>
          <ul className="skills-list">
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Hibernate</li>
            <li>Microservices</li>
            <li>REST APIs</li>
            <li>SQL (PostgreSQL)</li>
            <li>Docker</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
