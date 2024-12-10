import React from 'react';
import Style from '../css/Home.module.css';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Header/>
            <div className={Style.contents}>
                <div className={Style.fixedImage}></div>
                <Intro/>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
        </div>
    );
};

export default Home;