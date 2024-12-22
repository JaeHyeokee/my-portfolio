import React from 'react';
import Style from '../css/Modal.module.css';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Modal = ({ project, onClose }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
    };

    if (!project) return null;
    return (
        <motion.div
            className={Style.modalBackdrop}
            onClick={onClose}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className={Style.modalContent}
                onClick={(e) => e.stopPropagation()}
                variants={{ hidden: { scale: 0.7, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <button className={Style.closeButton} onClick={onClose}>X</button>
                <Slider {...settings} className={Style.slider}>
                    <div>
                        <img src={project.thumbnail} alt='thumbnail'/>
                    </div>
                    <div>
                        <img src={project.thumbnail} alt='thumbnail'/>
                    </div>
                </Slider>
                <div>
                    <h2 className={Style.name}>{project.name}</h2>
                    <p className={Style.period}>{project.period}</p>
                    <p className={Style.info}>{project.info}</p>
                    <p className={Style.skills}>{project.skills}</p>
                </div>
            </motion.div>
        </motion.div>
    ); 
};

export default Modal;