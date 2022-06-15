import React from 'react';
import './Projects.css';
import IMG1 from '../../images/assets/strong-gyem-home.png'
import IMG2 from '../../images/assets/cap-collection.png'
import IMG3 from '../../images/assets/iphone.png'
import IMG4 from '../../images/assets/calculet-image.png'
import IMG5 from '../../images/assets/convention-home.png'
import IMG6 from '../../images/assets/influencer-banner.png'
import { FaRegEye } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();

    const handleDetail = id => {
        navigate(`/projects/${id}`)
    }

    const { text } = useTypewriter({
        words: ['Recent Work'],
        loop: {}
    })
    const myProjects = [
        {
            id: 1,
            image: IMG1,
            name: 'STRONG GYM',
            github: <a href="https://github.com/MohammadFaysal731/independent-service-provider-a10" target="_blank"><BsGithub className='icon'></BsGithub></a>,
            live: <a href="https://independent-service-prov-f1a49.web.app/" target="_blank"><FaRegEye className='icon'></FaRegEye></a>,
        },
        {
            id: 2,
            image: IMG2,
            name: 'Cap Collection',
            github: <a href="https://github.com/MohammadFaysal731/cap-calactions-a8" target="_blank"><BsGithub className='icon'></BsGithub></a>,
            live: <a href="https://cap-collection.netlify.app/" target="_blank"><FaRegEye className='icon'></FaRegEye></a>,
        },
        {
            id: 3,
            image: IMG3,
            name: 'Pic Your Phone',
            github: <a href="https://github.com/MohammadFaysal731/pick-your-phone-a6" target="_blank"><BsGithub className='icon'></BsGithub></a>,
            live: <a href="https://pick-your-phone-on-you-buzzet.netlify.app/" target="_blank"><FaRegEye className='icon'></FaRegEye></a>,
        },
        {
            id: 4,
            image: IMG4,
            name: 'Calculate My Monthly Income',
            github: <a href="https://github.com/MohammadFaysal731/calculalte-my-monthly-income-a5" target="_blank"><BsGithub className='icon'></BsGithub></a>,
            live: <a href="https://calculate-my-monthly-income.netlify.app/" target="_blank"><FaRegEye className='icon'></FaRegEye></a>,
        },
        {
            id: 5,
            image: IMG5,
            name: 'Convention Center',
            github: <a href="https://github.com/MohammadFaysal731/convention-center-a3" target="_blank"><BsGithub className='icon'></BsGithub></a>,
            live: <a href="https://pedantic-wozniak-894080.netlify.app/" target="_blank"><FaRegEye className='icon'></FaRegEye></a>,
        },
        {
            id: 6,
            image: IMG6,
            name: 'Influencer Products',
            github: <a href="https://github.com/MohammadFaysal731/influencer-products-a2" target="_blank"><BsGithub className='icon'></BsGithub></a>,
            live: <a href="https://influncerproducts-vainla-css.netlify.app/" target="_blank"><FaRegEye className='icon'></FaRegEye></a>,

        },
    ]
    return (
        <section id='projects' className='section'>
            <h2
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            >My Projects</h2>
            <h5
                data-aos="fade-down"
                data-aos-delay="90"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            >{text}<Cursor></Cursor></h5>
            <div className="container project-container">
                {
                    myProjects.map(({ id, name, image, github, live }, index) => < article
                        data-aos="flip-left"
                        data-aos-delay="110"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        key={index} className="project-item">
                        <div className="project-info">
                            <img src={image} alt="" className='project-image' />
                            <div className="project-details">
                                <h2>{name}</h2>
                            </div>
                            <div className="icons">
                                <button onClick={() => handleDetail(id)} className='detail-btn'>details</button>
                                <p>{github}</p>
                                <p>{live}</p>
                            </div>
                        </div>
                    </ article>
                    )
                }
            </div>
        </section >
    );
};

export default Projects;