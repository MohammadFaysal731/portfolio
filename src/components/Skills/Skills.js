import React from 'react';
import './Skills.css'
import { DiCss3 } from 'react-icons/di'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { TbBrandJavascript, TbBrandTailwind } from 'react-icons/tb'
import { SiBootstrap, SiMongodb, SiExpress } from 'react-icons/si'
import { FaReacteurope } from 'react-icons/fa'
import { DiNodejs } from 'react-icons/di'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
const Skills = () => {
    const { text } = useTypewriter({
        words: ['What Skill I Have'],
        loop: {}
    })
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
            <h2
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            >My Skills</h2>
            <h5
                data-aos="fade-down"
                data-aos-delay="90"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            >{text}<Cursor></Cursor></h5>
            <div className="container skill-container">
                <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className="skill-frontend">
                    <h3>Frontend Development</h3>
                    <div className="skill-content">
                        {
                            mySkills.map(({ icon, name, detail }, index) => <article
                                data-aos="flip-down"
                                data-aos-delay="1300"
                                data-aos-duration="1500"
                                data-aos-easing="ease-in-out"
                                key={index} className='skill-details'>
                                <h6 className='skill-details-icon'>{icon}</h6>
                                <h4 >{name}</h4>
                                <small className='text-light'>{detail}</small>
                            </article>)
                        }
                        <button
                            data-aos="flip-down"
                            data-aos-delay="1100"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            className='skill-details-btn'>See More</button>
                    </div>
                </div>

                <div
                    data-aos="fade-left"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className="skill-backend">
                    <h3>Backend Development</h3>
                    <div className="skill-content">
                        <article
                            data-aos="flip-down"
                            data-aos-delay="1300"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            className='skill-details'>
                            <DiNodejs className='skill-details-icon'></DiNodejs>
                            <h4>Node JS</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article
                            data-aos="flip-down"
                            data-aos-delay="1300"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            className='skill-details'>
                            <SiExpress className='skill-details-icon'></SiExpress>
                            <h4>Express JS</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article
                            data-aos="flip-down"
                            data-aos-delay="1300"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            className='skill-details'>
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