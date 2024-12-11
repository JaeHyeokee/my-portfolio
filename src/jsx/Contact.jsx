import React from 'react';
import Style from '../css/Contact.module.css';

const FloatingLabelInput = ({ label, type, id }) => {
    return (
        <div className={Style.floatingLabelContainer}>
            <input type={type} id={id} className={Style.floatingLabelInput} placeholder=" "/>
            <label htmlFor={id} className={Style.floatingLabel}>{label}</label>
        </div>
    );
};

const Contact = () => {
    return (
        <div id="contact" className={Style.frame}>
            <div className={Style.triangle}></div>
            <div className={Style.section}>
                <span className={Style.title}>CONTACT</span>
                <form className={Style.form}>
                    <FloatingLabelInput label="Email" type="email" id="email"/>
                    <FloatingLabelInput label="Title" type="text" id="title"/>
                    <div className={Style.floatingLabelContainer}>
                        <textarea placeholder=" " rows={7} className={Style.floatingLabelInputLong}  id="contents"/>
                        <label htmlFor="contents" className={Style.floatingLabelLong}>Contents</label>
                    </div>
                    <button className={Style.send} type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;