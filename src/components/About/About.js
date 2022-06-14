import React from 'react';
import './About.css'
import Me from '../../images/assets/me.jpg'
import { FaAward, FaUsers, FaRegFolderOpen } from 'react-icons/fa';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const About = () => {
    const { text } = useTypewriter({
        words: ['Get To Know'],
        loop: {}
    })
    return (
        <section id='about' className='section'>
            <h2
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            >About Me</h2>
            <h5
                data-aos="fade-down"
                data-aos-delay="1100"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
            >{text}<Cursor></Cursor></h5>
            <div className="container about-container">
                <div
                    data-aos="fade-down-right"
                    data-aos-delay="1600"
                    data-aos-duration="1800"
                    data-aos-easing="ease-in-out"
                    className="about-me">
                    <div className="about-me-image">
                        <img src={Me} alt="AboutImage" />
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article
                            data-aos="fade-down"
                            data-aos-delay="2000"
                            data-aos-duration="2200"
                            data-aos-easing="ease-in-out"
                            className='about-card'>
                            <FaRegFolderOpen className='about-icon'></FaRegFolderOpen>
                            <h5>Projects</h5>
                            <small>30+ Completed</small>
                        </article>
                        <article
                            data-aos="fade-up"
                            data-aos-delay="2400"
                            data-aos-duration="2600"
                            data-aos-easing="ease-in-out"
                            className='about-card'>
                            <FaAward className='about-icon'></FaAward>
                            <h5>Experience</h5>
                            <small>Fresher</small>
                        </article>
                        <article
                            data-aos="fade-down"
                            data-aos-delay="2800"
                            data-aos-duration="3000"
                            data-aos-easing="ease-in-out"
                            className='about-card'>
                            <FaUsers className='about-icon'></FaUsers>
                            <h5>Clients</h5>
                            <small>Coming Soon</small>
                        </article>

                    </div>
                    <blockquote
                        data-aos="fade-up"
                        data-aos-delay="2900"
                        data-aos-duration="3000"
                        data-aos-easing="ease-in-out"
                    >
                        I am a student of Government Tolaram College. I am learning about web development and I am finishing my professional web development course. Now I am a web developer. I'm passionate about web development. I know about web development. My skills in web development I know  #HTML #CSS # JavaScript #ES6 #Bootstrap #React-Bootstrap #Tailwind and daisyui #React #React-Router #Firebase #NodeJS #Express #MongoDB.
                    </blockquote>
                    <a
                        data-aos="fade-up"
                        data-aos-delay="2900"
                        data-aos-duration="3000"
                        data-aos-easing="ease-in-out"
                        href="#contact" className='btn'>Contact Me</a>


                </div>

            </div>
        </section>
    );
};

export default About;