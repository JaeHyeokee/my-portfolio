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
        setStatus('');

        try {
            const response = await axios.post('http://43.203.22.247:5000/send', formData);
            if (response.status === 200) {
                setStatus('Email sent successfully!');
                alert('성공');
                setFormData({ email: '', title: '', contents: '' });
            } 
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('메일 전송에 실패했습니다.');
            alert('실패');
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
                    <button className={Style.send} type="submit">Send</button>
                </form>
                {status && <p>{status}</p>}
            </div>
        </div>
    );
};

export default Contact;