import "./projects.css";
import coming_soon from '../images/comingsoon.png'
import project_1 from '../images/first-project.png'
import project_2 from '../images/second-project.png'
import project_3 from '../images/project-3.png'

const Projects = () => {
  return (
    <div className="container p-2 d-flex align-items-center justify-content-center">
      <div className="row d-flex justify-content-center project-content">
        <div className="col-sm-4 d-flex justify-content-center align-items-center flex-wrap animate__animated animate__bounceInLeft">
          <a href="https://jacobryanwillis.github.io/Your_Digital_Personal_Trainer/" alt="Project 1">
            <img className="project-images" src={project_1} alt='Go For Fitness!'></img>   
          </a>
          <a href="https://github.com/JacobRyanWillis/The_Vault" alt="Project 2">
            <img className="project-images" src={project_2} alt='The Vault!'></img>   
          </a>
        </div>
        <div className="col-sm-4 d-flex justify-content-center align-items-center flex-wrap animate__animated animate__bounceIn">
          <a href="https://github.com/JacobRyanWillis/Grocery-Dash" alt="Project 3">
            <img className="coming-soon" src={project_3} alt='Market Dash'></img>   
          </a>
          <a href="https://jacobryanwillis.github.io/Your_Digital_Personal_Trainer/" alt="Project 4">
            <img className="coming-soon" src={coming_soon} alt='Coming-soon'></img>   
          </a>
        </div>
        <div className="col-sm-4 d-flex justify-content-center align-items-center flex-wrap animate__animated animate__bounceInRight">
          <a href="https://jacobryanwillis.github.io/Your_Digital_Personal_Trainer/" alt="Assignment">
            <img className="coming-soon" src={coming_soon} alt='Coming-soon'></img>   
          </a>
          <a href="https://jacobryanwillis.github.io/Your_Digital_Personal_Trainer/" alt="Assignment">
            <img className="coming-soon" src={coming_soon} alt='Coming-soon'></img>   
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects;
