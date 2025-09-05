import React from "react";
import "./ProjectsPage.css"; // We'll create this CSS file next

// You can update this array with your actual project data
const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform API",
    description:
      "A robust back-end for an e-commerce website built with Spring Boot, featuring user authentication, product catalog, and order processing.",
    technologies: ["Java", "Spring Boot", "JPA/Hibernate", "PostgreSQL", "JWT"],
    github: "#", // Replace with your GitHub link
    liveDemo: "#", // Replace with your live demo link
  },
  {
    id: 2,
    title: "Microservices-based URL Shortener",
    description:
      "A scalable URL shortening service developed using a microservices architecture. Each service is a containerized Spring Boot application.",
    technologies: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Docker",
      "REST APIs",
    ],
    github: "#", // Replace with your GitHub link
    liveDemo: "", // Leave empty if no live demo is available
  },
];

function ProjectsPage() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
