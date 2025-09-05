import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">Your Name</a>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {/* These spans will create the hamburger icon lines */}
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "navbar-links active" : "navbar-links"}>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#blog" onClick={() => setMenuOpen(false)}>
            Blog
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
