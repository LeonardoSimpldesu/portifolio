import React from "react";
import styles from "./Projects.module.css";

import Title from "../../components/Title";
import Tag from "../../components/Tag";
import Project from "../../components/Project";

import ProjectsList from "../../json/Projects.json";

export default function Projects() {
    return (
        <section className={styles.container}>
            <Title>
                Projetos Em Destaque
            </Title>
            <div className={styles.filters}>
                <Tag>Recentes</Tag>
                <Tag>Antigos</Tag>
                <Tag>Complexos</Tag>
            </div>
            <div className={styles.projectsList}>
                {ProjectsList.map((item) => {
                    return(
                        <Project {...item} key={item.id}/>
                    );
                })}
            </div>
        </section>
    );
}
