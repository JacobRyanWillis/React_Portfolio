import React, { useEffect, useState } from 'react';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Resume from './resume';
import Navigation from './navigation';

const Content = () => {
    const [activeSection, setActiveSection] = useState('About');
  
    const handleNavigationClick = (title) => {
      setActiveSection(title);
    };
  
    useEffect(() => {
      setActiveSection(activeSection);

    }, [activeSection]);
  
    return (
      <section id="content">
        <Navigation
          activeSection={activeSection}
          handleNavigationClick={handleNavigationClick}
        />
  
        {/* Render the selected section based on activeSection state */}
        {activeSection === 'About' && <About />}
        {activeSection === 'Projects' && <Projects />}
        {activeSection === 'Contact' && <Contact />}
        {activeSection === 'Resume' && <Resume />}
      </section>
    );
  };
  
  export default Content;
