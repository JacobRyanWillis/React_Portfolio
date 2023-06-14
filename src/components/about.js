import 'animate.css'
import './about.css'

const About = () => {
  return (
    <div className='container-fluid p-2 m-2 d-flex align-items-center justify-content-center about-div animate__animated animate__fadeIn'>
      <div className='row d-flex justify-content-center about-content'>
        <p className='col-6 about-text bg-dark m-2'>
          <h2 className='d-flex justify-content-center intro'>Hey, I'm Jacob Willis</h2> I'm an aspiring full stack developer! As a nerd, gamer, coach, and fitness enthusiast, I bring a unique perspective to my work.
          With a strong foundation in programming languages and frameworks, I'm continuously expanding my skills in the ever-evolving tech landscape. From front-end design to back-end development, 
          I'm eager to tackle new challenges and make meaningful contributions to innovative projects.
        </p>
        <img className='col-6 profile-pic' alt="Its Me!" src="/images/profile-pic.jpg"></img>
      </div>
    </div>
  );
};

export default About;
