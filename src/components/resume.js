import React from 'react'
import JobResume from './assets/jobresume.pdf'

const Resume = () => {
    return (
    <div>
        Resume
        <a href= {JobResume} download> Click to download </a>
    </div>
    )    
}

export default Resume;