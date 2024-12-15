import React from 'react';
import Style from '../css/About.module.css';
import { motion } from 'framer-motion';
import ProfileImg from '../img/about/Profile.jpg';
import Name from '../img/about/Name.png';
import Birth from '../img/about/Birth.png';
import Residence from '../img/about/Residence.png';
import Education from '../img/about/Education.png';
import Phone from '../img/about/Phone.png';
import Email from '../img/about/Email.png';

const About = () => {
 
    return (
        <motion.section
            id="about"
            className={Style.section}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 0.5 }}
        >
            <span className={Style.title}>ABOUT</span>
            <div className={Style.profileSection}>
                <img className={Style.profileImg} src={ProfileImg} alt='profileImg'/>
                <ul className={Style.profile}>
                    <li className={Style.profileInfo}>
                        <img className={Style.icon} src={Name} alt='name'/>
                        <p className={Style.info}><label className={Style.label}>이름<br/></label>이재혁</p>
                    </li>
                    <li className={Style.profileInfo}>
                        <img className={Style.icon} src={Birth} alt='birth'/>    
                        <p className={Style.info}><label className={Style.label}>생년월일<br/></label>1997.08.17</p>
                    </li>
                    <li className={Style.profileInfo}>
                        <img className={Style.icon} src={Residence} alt='residence'/>    
                        <p className={Style.info}><label className={Style.label}>거주 지역<br/></label>경기도 성남시 분당구</p>
                    </li>
                </ul>
                <ul className={Style.profile}>
                    <li className={Style.profileInfo}>
                        <img className={Style.icon} src={Education} alt='education'/>    
                        <p className={Style.info}><label className={Style.label}>최종 학력<br/></label>세종대학교 소프트웨어학과</p>
                    </li>
                    <li className={Style.profileInfo}>
                        <img className={Style.icon} src={Phone} alt='phone'/>    
                        <p className={Style.info}><label className={Style.label}>연락처<br/></label>010-4678-3712</p>
                    </li>
                    <li className={Style.profileInfo}>
                        <img className={Style.icon} src={Email} alt='email'/>    
                        <p className={Style.info}><label className={Style.label}>이메일<br/></label>jaehyeok817@naver.com</p>
                    </li>
                </ul>
                <ul className={Style.profileMobile}>
                    <li className={Style.profileInfo}>
                        <img className={Style.icon} src={Name} alt='name'/>
                        <p className={Style.info}><label className={Style.label}>이름<br/></label>이재혁</p>
                    </li>
                    <li className={Style.profileInfo}>
                        <img className={Style.icon} src={Education} alt='education'/>    
                        <p className={Style.info}><label className={Style.label}>최종 학력<br/></label>세종대학교 소프트웨어학과</p>
                    </li>
                    <li className={Style.profileInfo}>
                        <img className={Style.icon} src={Birth} alt='birth'/>    
                        <p className={Style.info}><label className={Style.label}>생년월일<br/></label>1997.08.17</p>
                    </li>
                    <li className={Style.profileInfo}>
                        <img className={Style.icon} src={Residence} alt='residence'/>    
                        <p className={Style.info}><label className={Style.label}>거주 지역<br/></label>경기도 성남시 분당구</p>
                    </li>
                    <li className={Style.profileInfo}>
                        <img className={Style.icon} src={Phone} alt='phone'/>    
                        <p className={Style.info}><label className={Style.label}>연락처<br/></label>010-4678-3712</p>
                    </li>
                    <li className={Style.profileInfo}>
                        <img className={Style.icon} src={Email} alt='email'/>    
                        <p className={Style.info}><label className={Style.label}>이메일<br/></label>jaehyeok817@naver.com</p>
                    </li>
                </ul>
            </div>
        </motion.section>
    );
};

export default About;