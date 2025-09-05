import React from "react";
import "./ContactPage.css"; // We'll create this CSS file next

function ContactPage() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p>
          I'm currently open to new opportunities and collaborations. If you
          have a question or just want to say hi, feel free to reach out. I'll
          try my best to get back to you!
        </p>
        <div className="contact-links">
          <a href="mailto:youremail@example.com" className="contact-button">
            Email Me
          </a>
          <a
            href="#" // Add your LinkedIn URL here
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            LinkedIn
          </a>
          <a
            href="#" // Add your GitHub URL here
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
