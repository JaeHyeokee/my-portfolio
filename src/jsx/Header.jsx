import React from 'react';
import Style from '../css/Header.module.css';

const Header = () => {
    return (
        <nav className={Style.navbar}>
            <a href="" className={Style.logo}><img src='' alt='logo'/></a>
            <ul className={Style.navLinks}>
                <li className={Style.link}><a href="#about">About</a></li>
                <li className={Style.link}><a href="#project">Project</a></li>
                <li className={Style.link}><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Header;