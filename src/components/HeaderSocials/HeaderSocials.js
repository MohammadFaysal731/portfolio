import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';
import './HeaderSocials.css';
const HeaderSocials = () => {
    return (
        <div
            data-aos="fade-down-right"
            data-aos-delay="2500"
            data-aos-duration="3000"
            data-aos-easing="ease-in-out"
            className='header-socials'>
            <a href="https://linkedin.com" target="_blank"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com" target="_blank"><BsGithub></BsGithub></a>
            <a href="https://www.facebook.com" target="_blank"><BsFacebook></BsFacebook></a>
            <a href="https://twitter.com/home" target="_blank"><AiFillTwitterCircle></AiFillTwitterCircle></a>
        </div>
    );
};

export default HeaderSocials;