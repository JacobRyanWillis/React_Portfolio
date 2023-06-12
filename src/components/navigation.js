// import React, { useState } from 'react';
import "./navigation.css";
// import { FaReact } from "react-icons/fa";

const Navigation = ({ activeSection, handleNavigationClick }) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-brand">
            <h2 className="name">Jacob Willis</h2>
            <span className="role">Full Stack Developer</span>
          </div>
          <ul className="navbar-nav ml-auto">
            <li
              className={`nav-item ${activeSection === 'About' ? 'active' : ''}`}
              onClick={() => handleNavigationClick('About')}
            >
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li
              className={`nav-item ${activeSection === 'Projects' ? 'active' : ''}`}
              onClick={() => handleNavigationClick('Projects')}
            >
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li
              className={`nav-item ${activeSection === 'Contact' ? 'active' : ''}`}
              onClick={() => handleNavigationClick('Contact')}
            >
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navigation;


