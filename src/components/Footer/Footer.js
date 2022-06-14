import React from 'react';
import './Footer.css'
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';
const Footer = () => {
    const today = new Date()
    const year = today.getFullYear();
    return (
        <footer id='footer'>
            <ul
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div
                data-aos="fade-down"
                data-aos-delay="1500"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                className="footer-socials">
                <a href="https://linkedin.com" target="_blank"><BsLinkedin></BsLinkedin></a>
                <a href="https://github.com" target="_blank"><BsGithub></BsGithub></a>
                <a href="https://www.facebook.com" target="_blank"><BsFacebook></BsFacebook></a>
                <a href="https://twitter.com/home" target="_blank"><AiFillTwitterCircle></AiFillTwitterCircle></a>
            </div>
            <div
                data-aos="fade-down"
                data-aos-delay="2500"
                data-aos-duration="3000"
                data-aos-easing="ease-in-out"
                className="footer-copyright">
                <h2>My Portfolio Web Site</h2>
                <p>&copy; Copyright {year} &copy;</p>
                <p>All Rights Reserved. Prowered by the Mohammad Faysal.</p>
            </div>
        </footer>
    );
};

export default Footer;