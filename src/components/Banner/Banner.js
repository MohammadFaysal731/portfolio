import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Resume from '../Resume/Resume';
import HeaderSocials from '../BannerSocials/BannerSocials';
import ME from '../../images/assets/me.png'
import './Banner.css';
const Banner = () => {
    const { text } = useTypewriter({
        words: ['Front-End Developer', 'Web Developer', 'React Developer', 'Meran Stack Developer',],
        loop: {}
    })
    return (
        <section className='banner'>
            <div className="container banner-container">
                <h5
                    data-aos="fade-down"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >Hello I'm</h5>
                <h2
                    data-aos="fade-down"
                    data-aos-delay="1000"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                >Mohammad Faysal</h2>
                <h5
                    data-aos="fade-down"
                    data-aos-delay="1500"
                    data-aos-duration="1600"
                    data-aos-easing="ease-in-out"
                    style={{ color: '#176F6B', fontSize: '1rem' }}>{text}<Cursor></Cursor></h5>
                <Resume></Resume>
                <HeaderSocials></HeaderSocials>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="2500"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in-out"
                    className="me">
                    <img src={ME} alt="" />
                </div>
            </div>
        </section >

    );
};

export default Banner;