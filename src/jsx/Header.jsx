import React, { useEffect, useState } from 'react';
import Style from '../css/Header.module.css';
import { Link } from 'react-scroll';
import Logo from '../img/Logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (window.scrollY > 80) setIsScrolled(true);
        else setIsScrolled(false);

        const sections = ['intro', 'about', 'skills', 'projects', 'contact'];
        for (let section of sections) {
            const element = document.getElementById(section);
            if (element && element.offsetTop <= currentScrollY + 100) {
                setActiveSection(section);
            }
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setIsScrolled(true);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
 
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={Style.header}>
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

            <nav className={Style.navbarMobile}>
                <div className={`${Style.navMobileTop} ${isScrolled ? Style.scrolled : ''}`}>
                    <Link to="introMobile" smooth={true} duration={500}><img className={Style.logoMobile} src={Logo} alt='logo'/></Link>
                    
                    {/* 햄버거 아이콘 */}
                    <div className={Style.hamburgerIcon} onClick={toggleMenu}>
                        <div className={`${Style.bar} ${Style.top} ${isOpen ? Style.open : ''}`}></div>
                        <div className={`${Style.bar} ${Style.mid} ${isOpen ? Style.open : ''}`}></div>
                        <div className={`${Style.bar} ${Style.bot} ${isOpen ? Style.open : ''}`}></div>
                    </div>
                </div>
                <ul className={`${Style.navLinksMobile} ${isOpen ? Style.menuOpen : ''}`}>
                    {['about', 'skills', 'projects', 'contact'].map(section => (
                        <li key={section} className={`${Style.linkMobile} ${activeSection === section ? Style.active : ''}`}>
                            <Link to={section} smooth={true} duration={500}>{section.toUpperCase()}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;