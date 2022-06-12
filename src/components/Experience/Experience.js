import React from 'react';
import './Experince.css'
import { BsPatchCheck } from 'react-icons/bs'
const Experience = () => {
    return (
        <section id='experience' className='section'>
            <h2>My Experience</h2>
            <h5>What Skill I Have</h5>
            <div className="container experience-container">
                <div className="experience-frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience-content">
                        <article className='experience-details'>
                            <BsPatchCheck className='experience-details-icon'></BsPatchCheck>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheck className='experience-details-icon'></BsPatchCheck>
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheck className='experience-details-icon'></BsPatchCheck>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheck className='experience-details-icon'></BsPatchCheck>
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheck className='experience-details-icon'></BsPatchCheck>
                            <h4>Tailwind</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheck className='experience-details-icon'></BsPatchCheck>
                            <h4>React</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                    </div>
                </div>

                <div className="experience-backend">
                    <h3>Backend Development</h3>
                    <div className="experience-content">
                        <article className='experience-details'>
                            <BsPatchCheck className='experience-details-icon'></BsPatchCheck>
                            <h4>Node JS</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheck className='experience-details-icon'></BsPatchCheck>
                            <h4>Express JS</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheck className='experience-details-icon'></BsPatchCheck>
                            <h4>MongoDB</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;