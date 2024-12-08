import React from 'react';
import Style from '../css/Home.module.css';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <div className={Style.contents}>
                <div className={Style.fixedImage}></div>
                <Intro/>
                <About/>
                <Project/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;