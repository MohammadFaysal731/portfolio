import React from 'react';
import MyResume from '../../images/assets/MY-RESUME.pdf'
import './Resume.css'
const Resume = () => {
    return (
        <div className='resume'>
            <a
                data-aos="fade-up-right"
                data-aos-delay="1800"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                href="#contact" className='btn'>Contact Me</a>
            <a
                data-aos="fade-up-left"
                data-aos-delay="2000"
                data-aos-duration="2500"
                data-aos-easing="ease-in-out"
                href={MyResume} download className='btn'>Download Resume</a>
        </div>
    );
};

export default Resume;