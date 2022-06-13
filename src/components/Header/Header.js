import React from 'react';
import Resume from '../Resume/Resume';
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
                <Resume></Resume>
                <HeaderSocials></HeaderSocials>
                <div className="me">
                    <img src={ME} alt="" />
                </div>
            </div>
        </header>
        //  <SiChainlink></SiChainlink>
    );
};

export default Header;