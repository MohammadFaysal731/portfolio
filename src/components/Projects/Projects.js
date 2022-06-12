import React from 'react';
import './Projects.css';
import IMG1 from '../../images/assets/portfolio1.jpg'
import IMG2 from '../../images/assets/portfolio2.jpg'
import IMG3 from '../../images/assets/portfolio3.jpg'
import IMG4 from '../../images/assets/portfolio4.jpg'
import IMG5 from '../../images/assets/portfolio5.png'
import IMG6 from '../../images/assets/portfolio6.jpg'
const Projects = () => {
    return (
        <section id='projects' className='section'>
            <h2>My Project</h2>
            <h5>Recent Work</h5>
            <div className="container project-container">
                <article className='project-item'>
                    <div className="project-item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a project item title</h3>
                    <div className="project-item-cta">
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='project-item'>
                    <div className="project-item-image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>This is a project item title</h3>
                    <div className="project-item-cta">
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='project-item'>
                    <div className="project-item-image">
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>This is a project item title</h3>
                    <div className="project-item-cta">
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='project-item'>
                    <div className="project-item-image">
                        <img src={IMG4} alt="" />
                    </div>
                    <h3>This is a project item title</h3>
                    <div className="project-item-cta">
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='project-item'>
                    <div className="project-item-image">
                        <img src={IMG5} alt="" />
                    </div>
                    <h3>This is a project item title</h3>
                    <div className="project-item-cta">
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='project-item'>
                    <div className="project-item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a project item title</h3>
                    <div className="project-item-cta">
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='project-item'>
                    <div className="project-item-image">
                        <img src={IMG6} alt="" />
                    </div>
                    <h3>This is a project item title</h3>
                    <div className="project-item-cta">
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Projects;