import React from 'react';
import { SiChainlink } from 'react-icons/si';
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs';
import './HeaderSocials.css';
const HeaderSocials = () => {
    return (
        <div className='header-socials'>
            <a href="https://linkedin.com" target="_blank"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com" target="_blank"><BsGithub></BsGithub></a>
            <a href="https://dribbble.com" target="_blank"><SiChainlink></SiChainlink></a>
            <a href="https://dribbble.com" target="_blank"><BsDribbble></BsDribbble></a>
        </div>
    );
};

export default HeaderSocials;