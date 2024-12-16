import React, { useEffect, useState } from 'react';
import Style from '../css/Projects.module.css';
import { motion } from 'framer-motion';
import Data from '../data/Projects.json';
import Modal from './Modal';

const Project = () => {
    const [data, setData] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setData(Data);
    }, []);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

    return (
        <motion.section
            id="projects"
            className={Style.section}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 0.5 }}
        >
            <span className={Style.title}>PROJECTS</span>
            <div className={Style.projectFrame}>
                {data.map((item) => (
                    <div className={Style.project} key={item.id} onClick={() => openModal(item)}>
                        <img className={Style.thumbnail} src={item.thumbnail} alt='thumbnail'/>
                        <div className={Style.spoiler}>
                            <div className={Style.nameAndPeriod}>
                                <span className={Style.name}>{item.name}</span>
                                <span className={Style.period}>{item.period}</span>
                            </div>
                            <span className={Style.info}>{item.info}</span>
                            <span className={Style.skills}>{item.skills}</span>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <Modal project={selectedProject} onClose={closeModal}/>
            )}
        </motion.section>
    );
};

export default Project;