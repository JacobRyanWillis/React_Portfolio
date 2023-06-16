import React from 'react'
import JobResume from './assets/jobresume.pdf'
import './resume.css'

const Resume = () => {
    return (
    <div className='container-fluid '>
        <div className='row resume-div'>
            <div className='col-sm-6 mb-4 rounded border border-light text-center align-self-center bg-dark animate__animated animate__bounceInLeft'>
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
            <div className='col-sm-6 text-center align-self-center animate__animated animate__bounceInRight'>
                {/* <a href={JobResume} download><h2>Download</h2></a> */}
                {/* I removed the download link^ because there is a download link in the iframe preview */}
                <iframe className='resume-iframe' src={JobResume} title="My Resume"></iframe>
            </div>
        </div>
    </div>
    )    
}

export default Resume;