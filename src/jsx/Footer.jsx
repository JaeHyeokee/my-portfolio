import React from 'react';
import Style from '../css/Footer.module.css';
import Github from '../img/footer/Github.png';
import Instagram from '../img/footer/Instagram.png';
import Facebook from '../img/footer/Facebook.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={Style.footer}>
            <ul className={Style.socialList}>
                <li className={Style.social}>
                    <Link className={Style.socialLink} to='https://github.com/JaeHyeokee'>
                        <img className={Style.socialIcon} src={Github} alt='Github'/>
                    </Link>
                </li>
                <li className={Style.social}>
                    <Link className={Style.socialLink} to='https://www.instagram.com/j_hyeok_e_/'>
                        <img className={Style.socialIcon} src={Instagram} alt='Instagram'/>
                    </Link>
                </li>
                <li className={Style.social}>
                    <Link className={Style.socialLink} to='https://www.facebook.com/profile.php?id=100001672556034'>
                        <img className={Style.socialIcon} src={Facebook} alt='Facebook'/>
                    </Link>
                </li>
            </ul>
            <div className={Style.mentionFrame}>
                <p className={Style.mentionName}>Jaehyeok's Portfolio</p>
                <p className={Style.mentionYear}>©2024</p>
            </div>
        </footer>
    );
};

export default Footer;