import React from 'react';
import './Header.css'
import { SiChainlink } from 'react-icons/si'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <nav>
                <h3 className='nav-title'>
                    <SiChainlink></SiChainlink>
                    Mohammad Faysal
                    <SiChainlink></SiChainlink>
                </h3>
                <span className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                </span>
            </nav>
        </header>
    );
};

export default Header;