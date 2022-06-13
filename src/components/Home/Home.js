import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Experience from '../Skills/Skills';
import Nav from '../Nav/Nav';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <About></About>
            <Experience></Experience>
            <Services></Services>
            <Projects></Projects>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;