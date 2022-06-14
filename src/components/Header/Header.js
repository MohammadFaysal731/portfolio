import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Resume from '../Resume/Resume';
import HeaderSocials from '../HeaderSocials/HeaderSocials';
import ME from '../../images/assets/me.png'
import './Header.css';
const Header = () => {
    const { text } = useTypewriter({
        words: ['Front-End Developer', 'Web Developer', 'React Developer', 'Meran Stack Developer',],
        loop: {}
    })
    return (
        <header >
            <div className="container header-container">
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
                <div
                    data-aos="zoom-in"
                    data-aos-delay="2500"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in-out"
                    className="me">
                    <img src={ME} alt="" />
                </div>
                <HeaderSocials></HeaderSocials>
            </div>
        </header >
        //  <SiChainlink></SiChainlink>
    );
};

export default Header;