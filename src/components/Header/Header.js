import React from 'react';
import CTA from '../CTA/CTA';
import HeaderSocials from '../HeaderSocials/HeaderSocials';
import ME from '../../images/assets/me.png'

import './Header.css';
const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h2>Mohammad Faysal</h2>
                <h5 className='text-light'>Front-End Developer</h5>
                <CTA></CTA>
                <HeaderSocials></HeaderSocials>
                <div className="me">
                    <img src={ME} alt="" />
                </div>
                <a href="#contact" className='scroll-down'>Scroll Down</a>
            </div>
        </header>

    );
};

export default Header;