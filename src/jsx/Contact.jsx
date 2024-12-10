import React from 'react';
import Style from '../css/Contact.module.css';

const Contact = () => {
    return (
        <div id="contact" className={Style.frame}>
            <div className={Style.triangle}></div>
            <div className={Style.section}>
                <span className={Style.title}>CONTACT</span>
                <div></div>
                <p className={Style.mention}>© Jaehyeok Lee. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Contact;