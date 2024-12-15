import React, { useEffect, useState } from 'react';
import Style from '../css/Skills.module.css';
import { motion } from 'framer-motion';
import Data from '../data/Skills.json';

const groupByType = (data) => {
    return data.reduce((acc, curr) => {
        acc[curr.type] = {
            img: curr.img,
            items: [...curr.items]
        };
        return acc;
    }, {});
};

const Skills = () => {
    const [groupedData, setGroupedData] = useState({});

    useEffect(() => {
        const grouped = groupByType(Data);
        setGroupedData(grouped);
    }, []);

    return (
        <motion.section
            id="skills"
            className={Style.section}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 0.5 }}
        >
            <span className={Style.title}>SKILLS</span>
            <div className={Style.skillFrame}>
            {Object.keys(groupedData).map((type) => (
                <div key={type} className={Style.group}>
                    <div className={Style.typeFrame}>
                        <img className={Style.typeImg} src={groupedData[type].img} alt={`${type} icon`}/>
                        <span className={Style.typeLabel}>{type}</span>
                    </div>
                    <div className={Style.type}>
                        {groupedData[type].items.map((item) => (
                            <div key={item.id} className={Style.item}>
                                <img className={Style.icon} src={item.icon} alt={item.name}/>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </motion.section>
    );
};

export default Skills;