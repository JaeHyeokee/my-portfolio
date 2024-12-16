import React from 'react';
import Style from '../css/Modal.module.css';
import { motion } from 'framer-motion';

const Modal = ({ project, onClose }) => {
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
                <img className={Style.thumbnail} src={project.thumbnail} alt='thumbnail' />
                <h2 className={Style.name}>{project.name}</h2>
                <p className={Style.period}>{project.period}</p>
                <p className={Style.info}>{project.info}</p>
                <p className={Style.skills}>{project.skills}</p>
            </motion.div>
        </motion.div>
    );
};

export default Modal;