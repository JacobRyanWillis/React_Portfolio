import React from 'react'
import JobResume from './assets/jobresume.pdf'
import './resume.css'

const Resume = () => {
    return (
    <div className='container-fluid '>
        <div className='row resume-div'>
            <div className='col-sm-6 mb-4 rounded border border-light text-center align-self-center bg-dark'>
                <h2 className='text-primary underline'> Skills </h2>
                <ul className='text-light list-unstyled underline'>
                    <li> REACT </li>
                    <li> MERN </li>
                    <li> BootStrap </li>
                    <li> Front-End </li>
                    <li> Back-End </li>
                    <li> Mongoose </li>
                    <li> Hire me </li>
                </ul>
            </div>
            <div className='col-sm-6 text-center align-self-center'>
                {/* <a href={JobResume} download><h2>Download</h2></a> */}
                <iframe className='resume-iframe' src={JobResume} title="My Resume"></iframe>
            </div>
        </div>
    </div>
    )    
}

export default Resume;