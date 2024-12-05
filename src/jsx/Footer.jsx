import React from 'react';
import Style from '../css/Footer.module.css';

const Footer = () => {
    return (
        <footer className={Style.footer}>
            <p className={Style.mention}>© Jaehyeok Lee. All rights reserved.</p>
        </footer>
    );
};

export default Footer;