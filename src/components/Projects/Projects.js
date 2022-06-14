import React from 'react';
import './Projects.css';
import IMG1 from '../../images/assets/stornge-gym.JPG'
import IMG2 from '../../images/assets/caps-collection.JPG'
import IMG3 from '../../images/assets/pick-your-phone.JPG'
import IMG4 from '../../images/assets/calculate-my-monthly-income.JPG'
import IMG5 from '../../images/assets/convention-center.JPG'
import IMG6 from '../../images/assets/influncer-products.JPG'
import { FaRegEye } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
const Projects = () => {
    const { text } = useTypewriter({
        words: ['Recent Work'],
        loop: {}
    })
    const myProjects = [
        {
            image: IMG1,
            name: 'STRONG GYM',
            github: <a href="https://github.com/MohammadFaysal731/independent-service-provider-a10" target="_blank"><BsGithub className='icon'></BsGithub></a>,
            live: <a href="https://independent-service-prov-f1a49.web.app/" target="_blank"><FaRegEye className='icon'></FaRegEye></a>,
        },
        {
            image: IMG2,
            name: 'Cap Collection',
            github: <a href="https://github.com/MohammadFaysal731/cap-calactions-a8" target="_blank"><BsGithub className='icon'></BsGithub></a>,
            live: <a href="https://cap-collection.netlify.app/" target="_blank"><FaRegEye className='icon'></FaRegEye></a>,
        },
        {
            image: IMG3,
            name: 'Pic Your Phone',
            github: <a href="https://github.com/MohammadFaysal731/pick-your-phone-a6" target="_blank"><BsGithub className='icon'></BsGithub></a>,
            live: <a href="https://pick-your-phone-on-you-buzzet.netlify.app/" target="_blank"><FaRegEye className='icon'></FaRegEye></a>,
        },
        {
            image: IMG4,
            name: 'Calculate My Monthly Income',
            github: <a href="https://github.com/MohammadFaysal731/calculalte-my-monthly-income-a5" target="_blank"><BsGithub className='icon'></BsGithub></a>,
            live: <a href="https://calculate-my-monthly-income.netlify.app/" target="_blank"><FaRegEye className='icon'></FaRegEye></a>,
        },
        {
            image: IMG5,
            name: 'Convention Center',
            github: <a href="https://github.com/MohammadFaysal731/convention-center-a3" target="_blank"><BsGithub className='icon'></BsGithub></a>,
            live: <a href="https://pedantic-wozniak-894080.netlify.app/" target="_blank"><FaRegEye className='icon'></FaRegEye></a>,
        },
        {
            image: IMG6,
            name: 'Influencer Products',
            github: <a href="https://github.com/MohammadFaysal731/influencer-products-a2" target="_blank"><BsGithub className='icon'></BsGithub></a>,
            live: <a href="https://influncerproducts-vainla-css.netlify.app/" target="_blank"><FaRegEye className='icon'></FaRegEye></a>,

        },
    ]
    return (
        <section id='projects' className='section'>
            <h2>My Project</h2>
            <h5>{text}<Cursor></Cursor></h5>
            <Swiper className="container project-container"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {
                    myProjects.map(({ name, image, github, live }, index) => <SwiperSlide key={index} className="project-item">
                        <div className="project-info">
                            <img src={image} alt="" className='project-image' />
                            <div className="project-details">
                                <h2>{name}</h2>
                            </div>
                            <div className="icons">
                                <button className='detail-btn'>details</button>
                                <p>{github}</p>
                                <p>{live}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </section >
    );
};

export default Projects;