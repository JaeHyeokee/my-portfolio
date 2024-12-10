import React, { useEffect, useState } from 'react';
import Style from '../css/Projects.module.css';
import Data from '../data/Projects.json';

const Project = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Data);
    }, []);

    return (
        <div id="projects" className={Style.section}>
            <span className={Style.title}>PROJECTS</span>
            <div className={Style.projectFrame}>
                {data.map((item) => (
                    <div className={Style.project}>
                        <img className={Style.thumbnail} src={item.thumbnail} alt='thumbnail'/>
                        <div className={Style.spoiler} key={item.id}>
                            <span className={Style.name}>{item.name}</span>
                            <span className={Style.period}>{item.period}</span>
                            <span className={Style.info}>{item.info}</span>
                            <span className={Style.skills}>{item.skills}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;