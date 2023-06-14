import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import './footer.css';
import "animate.css";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center">
      <div className="footer-icons">
        <a href="https://github.com/JacobRyanWillis" className='github-icon animate__animated animate__bounceInUp animate__faster animate__delay-2s'>
          <AiFillGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/jacob-willis-a9a8a823a/" className='linkedin-icon animate__animated animate__bounceInUp animate__fast animate__delay-2s'>
          <AiFillLinkedin className="footer-icon" />
        </a>
        <a href="https://twitter.com/jakenazty12" className='twitter-icon animate__animated animate__bounceInUp animate__delay-2s'>
          <AiFillTwitterCircle className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
