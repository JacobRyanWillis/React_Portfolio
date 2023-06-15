import React from 'react';
import "./navigation.css";
import "animate.css";


const Navigation = ({ activeSection, handleNavigationClick }) => {
  
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark animate__animated animate__bounceInDown animate__delay-1s">
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
              <span className="nav-link">
                About
              </span>
            </li>
            <li
              className={`nav-item ${activeSection === 'Projects' ? 'active' : ''}`}
              onClick={() => handleNavigationClick('Projects')}
            >
              <span className="nav-link">
                Projects
              </span>
            </li>
            <li
              className={`nav-item ${activeSection === 'Contact' ? 'active' : ''}`}
              onClick={() => handleNavigationClick('Contact')}
            >
              
              <span className="nav-link">
                Contact
              </span>
      
            </li>
            <li
              className={`nav-item ${activeSection === 'Resume' ? 'active' : ''}`}
              onClick={() => handleNavigationClick('Resume')}
            >
              
              <span className="nav-link">
                Resume
              </span>
              
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navigation;


