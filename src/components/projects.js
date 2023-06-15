import "./projects.css";

const Projects = () => {
  return (
    <div className="container p-2 d-flex align-items-center justify-content-center">
      <div className="row d-flex justify-content-center project-content">
        <div className="col-sm-4 d-flex justify-content-center align-items-center flex-wrap animate__animated animate__bounceInLeft">
          <a href="https://jacobryanwillis.github.io/Your_Digital_Personal_Trainer/" alt="Project 1">
            <img className="project-images" src="../images/first-project.png" alt='Go For Fitness!'></img>   
          </a>
          <a href="https://github.com/JacobRyanWillis/The_Vault" alt="Project 2">
            <img className="project-images" src="../images/second-project.png" alt='The Vault!'></img>   
          </a>
        </div>
        <div className="col-sm-4 d-flex justify-content-center align-items-center flex-wrap animate__animated animate__bounceIn">
          <a href="https://jacobryanwillis.github.io/Your_Digital_Personal_Trainer/" alt="Project 3">
            <img className="coming-soon" src="../images/comingsoon.png" alt='Coming-soon'></img>   
          </a>
          <a href="https://jacobryanwillis.github.io/Your_Digital_Personal_Trainer/" alt="Project 4">
            <img className="coming-soon" src="../images/comingsoon.png" alt='Coming-soon'></img>   
          </a>
        </div>
        <div className="col-sm-4 d-flex justify-content-center align-items-center flex-wrap animate__animated animate__bounceInRight">
          <a href="https://jacobryanwillis.github.io/Your_Digital_Personal_Trainer/" alt="Assignment">
            <img className="coming-soon" src="../images/comingsoon.png" alt='Coming-soon'></img>   
          </a>
          <a href="https://jacobryanwillis.github.io/Your_Digital_Personal_Trainer/" alt="Assignment">
            <img className="coming-soon" src="../images/comingsoon.png" alt='Coming-soon'></img>   
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects;
