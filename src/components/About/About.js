import React from 'react';
import './About.css'
import Me from '../../images/assets/me-about.jpg'
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
                            <small>3+ Years</small>
                        </article>
                        <article className='about-card'>
                            <FaUsers className='about-icon'></FaUsers>
                            <h5>Clients</h5>
                            <small>300+ Worldwide</small>
                        </article>
                        <article className='about-card'>
                            <FaRegFolderOpen className='about-icon'></FaRegFolderOpen>
                            <h5>Projects</h5>
                            <small>30+ Completed</small>
                        </article>

                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, non corrupti earum fugit nostrum cumque quos distinctio. Nihil odio voluptatum itaque, consectetur, vitae nobis autem sunt, cumque voluptatem molestiae doloribus.</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>

            </div>
        </section>
    );
};

export default About;