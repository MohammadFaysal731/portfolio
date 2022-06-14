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
        <header>
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h2>Mohammad Faysal</h2>
                <h5 style={{ color: '#176F6B', fontSize: '1rem' }}>{text}<Cursor></Cursor></h5>
                <Resume></Resume>
                <HeaderSocials></HeaderSocials>
                <div className="me">
                    <img src={ME} alt="" />
                </div>
            </div>
        </header >
        //  <SiChainlink></SiChainlink>
    );
};

export default Header;