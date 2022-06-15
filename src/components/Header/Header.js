import React from 'react';
import './Header.css'
import { SiChainlink } from 'react-icons/si'
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'
const Header = () => {
    return (
        <header className='header-fix'>
            <nav>
                <span>
                    <h3><SiChainlink></SiChainlink>Mohammad Faysal<SiChainlink></SiChainlink></h3>
                </span>
                <input type="checkbox" id="nav-toggler" />
                <label htmlFor="nav-toggler" className='nav-toggler-icon'>
                    <AiOutlineMenu></AiOutlineMenu>
                </label>
                <span>
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