import React from 'react';
import './Skills.css'
import { DiCss3 } from 'react-icons/di'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { TbBrandJavascript, TbBrandTailwind } from 'react-icons/tb'
import { SiBootstrap, SiMongodb, SiExpress } from 'react-icons/si'
import { FaReacteurope } from 'react-icons/fa'
import { DiNodejs } from 'react-icons/di'
const Skills = () => {
    const mySkills = [
        {
            icon: <AiOutlineHtml5></AiOutlineHtml5>,
            name: 'HTML',
            detail: 'Experienced'
        },
        {
            icon: <DiCss3></DiCss3>,
            name: 'CSS',
            detail: 'Experienced'
        },
        {
            icon: <TbBrandJavascript></TbBrandJavascript>,
            name: 'JavaScript',
            detail: 'Experienced'
        },
        {
            icon: <SiBootstrap></SiBootstrap>,
            name: 'Bootstrap',
            detail: 'Experienced'
        },
        {
            icon: <FaReacteurope></FaReacteurope>,
            name: 'React Bootstrap',
            detail: 'Experienced'
        },
        {
            icon: <TbBrandTailwind></TbBrandTailwind>,
            name: 'Tailwind',
            detail: 'Experienced'
        },
    ]


    return (
        <section id='skill' className='section'>
            <h2>My Skills</h2>
            <h5>What Skill I Have</h5>
            <div className="container skill-container">
                <div className="skill-frontend">
                    <h3>Frontend Development</h3>
                    <div className="skill-content">
                        {
                            mySkills.map(({ icon, name, detail }, index) => <article key={index} className='skill-details'>
                                <h6 className='skill-details-icon'>{icon}</h6>
                                <h4 >{name}</h4>
                                <small className='text-light'>{detail}</small>
                            </article>)
                        }
                        <button className='skill-details-btn'>See More</button>
                    </div>
                </div>

                <div className="skill-backend">
                    <h3>Backend Development</h3>
                    <div className="skill-content">
                        <article className='skill-details'>
                            <DiNodejs className='skill-details-icon'></DiNodejs>
                            <h4>Node JS</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='skill-details'>
                            <SiExpress className='skill-details-icon'></SiExpress>
                            <h4>Express JS</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='skill-details'>
                            <SiMongodb className='skill-details-icon'></SiMongodb>
                            <h4>MongoDB</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;