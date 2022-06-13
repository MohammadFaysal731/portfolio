import React from 'react';
import './About.css'
import Me from '../../images/assets/me.jpg'
import { FaAward, FaUsers, FaRegFolderOpen } from 'react-icons/fa';

const About = () => {
    return (
        <section id='about' className='section'>
            <h2>About Me</h2>
            <h5>Get To Know</h5>
            <div className="container about-container">
                <div className="about-me">
                    <div className="about-me-image">
                        <img src={Me} alt="AboutImage" />
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article className='about-card'>
                            <FaAward className='about-icon'></FaAward>
                            <h5>Experience</h5>
                            <small>Fresher</small>
                        </article>
                        <article className='about-card'>
                            <FaUsers className='about-icon'></FaUsers>
                            <h5>Clients</h5>
                            <small>Coming Soon</small>
                        </article>
                        <article className='about-card'>
                            <FaRegFolderOpen className='about-icon'></FaRegFolderOpen>
                            <h5>Projects</h5>
                            <small>30+ Completed</small>
                        </article>

                    </div>
                    <blockquote>
                        I am a student of Government Tolaram College. I am learning about web development and I am finishing my professional web development course. Now I am a web developer. I'm passionate about web development. I know about web development. My skills in web development I know  #HTML #CSS # JavaScript #ES6 #Bootstrap #React-Bootstrap #Tailwind and daisyui #React #React-Router #Firebase #NodeJS #Express #MongoDB.
                    </blockquote>
                    <a href="#contact" className='btn'>Contact Me</a>
                </div>

            </div>
        </section>
    );
};

export default About;