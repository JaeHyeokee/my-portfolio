import React, { useEffect, useRef, useState } from 'react';
import Style from '../css/Modal.module.css';
import { motion } from 'framer-motion';

const Modal = ({ project, onClose }) => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = project.images;
    const slideWidth = 100;

    const goToSlide = (index) => {
        if (sliderRef.current) {
            const newIndex = (index + slides.length) % slides.length;
            sliderRef.current.style.transform = `translateX(-${newIndex * slideWidth}%)`;
            setCurrentIndex(newIndex);
        }
    };

    const nextSlide = () => goToSlide(currentIndex + 1);
    const prevSlide = () => goToSlide(currentIndex - 1);

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

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
                <div className={Style.sliderContainer}>
                    <div className={Style.sliderWrapper}>
                        {slides.map((src, index) => (
                            <div className={Style.slide} key={index}>
                                <img src={src} alt={`Slide ${index + 1}`}/>
                            </div>
                        ))}
                    </div>
                    <button className={Style.prevButton} onClick={prevSlide}>&#xE000;</button>
                    <button className={Style.nextButton} onClick={nextSlide}>&#xE001;</button>
                    <div className={Style.dots}>
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`${Style.dot} ${currentIndex === index ? Style.active : ""}`}
                                onClick={() => goToSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
                <div className={Style.projectInfo}>
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