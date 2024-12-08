import React, { useEffect, useState } from 'react';
import Style from '../css/Header.module.css';
import { Link } from 'react-scroll';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) setIsScrolled(true);
        else setIsScrolled(false);
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
                <li className={Style.link}><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li className={Style.link}><Link to="project" smooth={true} duration={500}>Project</Link></li>
                <li className={Style.link}><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Header;