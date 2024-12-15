import React from 'react';
import Style from '../css/Intro.module.css';
import { ReactTyped } from 'react-typed';

const Intro = () => {
    return (
        <section id="intro" className={Style.section}>
            <ReactTyped
                className={Style.title}
                strings={[
                    "도전과 발전을 추구하는<br>개발자 이재혁입니다 :)",
                ]}
                typeSpeed={70}
                backSpeed={0}
                startDelay={1000}
            />
        </section>
    );
};

export default Intro;