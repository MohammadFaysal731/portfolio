import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer-logo'>EGATOR</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer-socials">
                <a href="https://facebook.com">Facbook</a>
                <a href="https://inst">instragran</a>
                <a href="https://tw">twitter</a>
            </div>
            <div className="footer-copyright">
                <small>&copy; llkjljljlk</small>
            </div>
        </footer>
    );
};

export default Footer;