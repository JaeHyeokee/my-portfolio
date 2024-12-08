import React from 'react';
import Style from '../css/About.module.css';
import ProfileImg from '../img/Profile.jpg';
import Name from '../img/Name.png';
import Birth from '../img/Birth.png';
import Residence from '../img/Residence.png';
import Education from '../img/Education.png';

const About = () => {
    return (
        <section id="about" className={Style.section}>
            <span className={Style.title}>About Me</span>
            <div className={Style.profileSection}>
                <img src={ProfileImg} alt='profileImg'/>
                <div className={Style.profileFrame}>
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
                            <img className={Style.icon} src={Name} alt='name'/>    
                            <p className={Style.info}><label className={Style.label}>연락처<br/></label>010-4678-3712</p>
                        </li>
                        <li className={Style.profileInfo}>
                            <img className={Style.icon} src={Name} alt='name'/>    
                            <p className={Style.info}><label className={Style.label}>이메일<br/></label>jaehyeok817@naver.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;