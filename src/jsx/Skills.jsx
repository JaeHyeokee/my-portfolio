import React, { useEffect, useState } from 'react';
import Style from '../css/Skills.module.css';
import Data from '../data/Skills.json';

const groupByType = (data) => {
    return data.reduce((acc, item) => {
        if (!acc[item.type]) acc[item.type] = [];
        acc[item.type].push(item);
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
        <section id="skills" className={Style.section}>
            <span className={Style.title}>SKILLS</span>
            <div className={Style.skillFrame}>
            {Object.keys(groupedData).map((type) => (
                <div key={type} className={Style.group}>
                    <span className={Style.typeLabel}>{type}</span>
                    <div className={Style.type}>
                        {groupedData[type].map((item) => (
                            <div key={item.id} className={Style.item}>
                                <img className={Style.icon} src={item.icon} alt={item.name}/>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </section>
    );
};

export default Skills;