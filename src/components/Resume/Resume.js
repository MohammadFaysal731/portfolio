import React from 'react';
import MyResume from '../../images/assets/MY-RESUME.pdf'
import './Resume.css'
const Resume = () => {
    return (
        <div className='resume'>
            <a href="#contact" className='btn'>Contact Me</a>
            <a href={MyResume} download className='btn'>Download Resume</a>
        </div>
    );
};

export default Resume;