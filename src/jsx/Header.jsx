import React, { useEffect, useState } from 'react';
import Style from '../css/Header.module.css';
import { Link } from 'react-scroll';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (window.scrollY > 300) setIsScrolled(true);
        else setIsScrolled(false);

        const sections = ['intro', 'about', 'skills', 'projects', 'contact'];
        for (let section of sections) {
            const element = document.getElementById(section);
            if (element && element.offsetTop <= currentScrollY + 100) {
                setActiveSection(section);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
 
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${Style.navbar} ${isScrolled ? Style.scrolled : ''}`}>
            <Link to="intro" smooth={true} duration={500} className={Style.logo}>&#xE000; Jaehyeok's Portfolio / &#xE001;</Link>
            <ul className={Style.navLinks}>
                {['about', 'skills', 'projects', 'contact'].map(section => (
                    <li key={section} className={`${Style.link} ${activeSection === section ? Style.active : ''}`}>
                        <Link to={section} smooth={true} duration={500}>{section.toUpperCase()}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Header;