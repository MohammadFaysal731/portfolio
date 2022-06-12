import React, { useState } from 'react';
import './Nav.css';
import { RiServiceFill, RiHomeGearLine } from 'react-icons/ri';
import { AiOutlineBook } from 'react-icons/ai';
import { FaUserShield, FaRegFolderOpen } from 'react-icons/fa';
import { TbReport } from 'react-icons/tb';
import { FiMessageCircle } from 'react-icons/fi';
const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHomeGearLine></RiHomeGearLine></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserShield></FaUserShield></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook></AiOutlineBook></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill></RiServiceFill></a>
            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><FaRegFolderOpen></FaRegFolderOpen></a>
            <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><TbReport></TbReport></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiMessageCircle></FiMessageCircle></a>
        </nav>
    );
};

export default Nav;