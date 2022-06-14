import React from 'react';
import './Services.css';
import { MdOutlineIntegrationInstructions, MdOutlineRestorePage } from 'react-icons/md'
import { BsCodeSlash } from 'react-icons/bs'
import { GiSmartphone } from 'react-icons/gi'
import { } from 'react-icons/io'
import { FiDatabase } from 'react-icons/fi'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
const Services = () => {
    const { text } = useTypewriter({
        words: ['What I Offer'],
        loop: {}
    })
    const myServices = [
        {
            icon: <BsCodeSlash></BsCodeSlash>,
            name: "Web Development",
            description: "I can do interesting and beautiful web designs and develop them. According to the needs of my clients."
        },
        {
            icon: <GiSmartphone></GiSmartphone>,
            name: "Responsive Design",
            description: "I can also design Responsive Websites for that you can use your website in any devices."
        },
        {
            icon: <MdOutlineRestorePage></MdOutlineRestorePage>,
            name: "React SPA",
            description: "I can create single-page applications using React JS."
        },
        {
            icon: <FiDatabase></FiDatabase>,
            name: "Full Stack Project",
            description: "I can create single-page Mern Stack project using React js, Node Js, MongoDB."
        },
        {
            icon: <MdOutlineIntegrationInstructions></MdOutlineIntegrationInstructions>,
            name: "Bugs Fix",
            description: "I can fix any bug in any of the technologies mentioned above."
        }
    ]
    return (
        <section id='services' className='section'>
            <h2
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            >My Services</h2>
            <h5
                data-aos="fade-down"
                data-aos-delay="90"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            >{text}<Cursor></Cursor></h5>
            <div className="container service-container">
                {
                    myServices.map(({ icon, name, description }, index) => <article
                        data-aos="flip-up"
                        data-aos-delay="1200"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        key={index} className='service'>
                        <div className="service-head">
                            <h3>{name}</h3>
                        </div>
                        <h4 className="service-icon">{icon}</h4>
                        <p>{description}</p>

                    </article>)
                }
            </div>
        </section >
    );
};

export default Services;