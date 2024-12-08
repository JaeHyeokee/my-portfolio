import React from 'react';
import Style from '../css/Intro.module.css';
import { ReactTyped } from 'react-typed';

const Intro = () => {
    return (
        <section id="intro" className={Style.section}>
            <ReactTyped
                className={Style.title}
                strings={[
                    "안녕하세요<br>개발자 이재혁입니다.",
                ]}
                typeSpeed={70}
                backSpeed={0}
                startDelay={1500}
            />
        </section>
    );
};

export default Intro;