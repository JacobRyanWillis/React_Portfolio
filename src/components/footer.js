// import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import './footer.css';

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center">
      <div className="footer-icons">
        <a href="https://github.com/JacobRyanWillis" className='github-icon'>
          <AiFillGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/jacob-willis-a9a8a823a/" className='linkedin-icon'>
          <AiFillLinkedin className="footer-icon" />
        </a>
        <a href="https://twitter.com/jakenazty12" className='twitter-icon '>
          <AiFillTwitterCircle className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
