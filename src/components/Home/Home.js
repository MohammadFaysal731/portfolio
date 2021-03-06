import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Experience from '../Skills/Skills';
import SectionNavigation from '../SectionNavigation/SectionNavigation';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import './Home.css';
import Banner from '../Banner/Banner';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionNavigation></SectionNavigation>
            <About></About>
            <Experience></Experience>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;