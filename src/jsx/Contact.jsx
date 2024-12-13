import React, { useState } from 'react';
import axios from 'axios';
import Style from '../css/Contact.module.css';

const FloatingLabelInput = ({ label, type, name, value, onChange }) => {
    return (
        <div className={Style.floatingLabelContainer}>
            <input 
                type={type}
                name={name}
                className={Style.floatingLabelInput}
                placeholder=" "
                value={value}
                onChange={onChange}
            />
            <label htmlFor={name} className={Style.floatingLabel}>{label}</label>
        </div>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        title: '',
        contents: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Please wait...');

        try {
            const response = await axios.post('http://43.203.22.247:5000/send', formData);
            if (response.status === 200) {
                setStatus('Email sent successfully!');
                setFormData({ email: '', title: '', contents: '' });
            } 
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('Failed to send email.');
        }
    };

    return (
        <div id="contact" className={Style.frame}>
            <div className={Style.triangle}></div>
            <div className={Style.section}>
                <span className={Style.title}>CONTACT</span>
                <form className={Style.form} onSubmit={handleSubmit}>
                    <FloatingLabelInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange}/>
                    <FloatingLabelInput label="Title" type="text" name="title" value={formData.title} onChange={handleChange}/>
                    <div className={Style.floatingLabelContainer}>
                        <textarea placeholder=" " rows={7} className={Style.floatingLabelInputLong}  name="contents" value={formData.contents} onChange={handleChange}/>
                        <label htmlFor="contents" className={Style.floatingLabelLong}>Contents</label>
                    </div>
                    <div className={Style.statusAndButton}>
                        <p className={Style.status}>{status}</p>
                        <button className={Style.send} type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;