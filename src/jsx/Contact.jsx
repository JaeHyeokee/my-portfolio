import React, { useState } from 'react';
import Style from '../css/Contact.module.css';

const FloatingLabelInput = ({ label, type, id, value, onChange }) => {
    return (
        <div className={Style.floatingLabelContainer}>
            <input 
                type={type}
                id={id}
                className={Style.floatingLabelInput}
                placeholder=" "
                value={value}
                onChange={onChange}
            />
            <label htmlFor={id} className={Style.floatingLabel}>{label}</label>
        </div>
    );
};

const Contact = () => {
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, title, contents }),
            });

            if (response.ok) {
                alert('Email sent successfully!');
                setEmail('');
                setTitle('');
                setContents('');
            } else {
                alert('Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

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