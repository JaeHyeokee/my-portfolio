import React, { useEffect, useState } from 'react';
import Style from '../css/Skills.module.css';
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
        <section id="skills" className={Style.section}>
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
        </section>
    );
};

export default Skills;