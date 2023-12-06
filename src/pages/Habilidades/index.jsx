import React from "react";
import styles from "./Habilidades.module.css";
import Tag from "../../components/Tag";
import TechnologiesDB from "../../json/Technologies.json";
import Title from "../../components/Title";

export default function Habilidades() {
    console.log(TechnologiesDB);
    return (
        <section className={styles.habilidades}>
            <div className={styles.categoria}>
                <Title>Tecnologias usadas no meu dia a dia</Title>
                <div className={styles.icones}>
                    {TechnologiesDB.mostUsedTechnologies.map((element) => {
                        return (
                            <i
                                className={element.icon}
                                key={element.title}
                                title={element.title}
                            ></i>
                        );
                    })}
                </div>
            </div>
            <div className={styles.categoria}>
                <Title>
                    Tecnologias que tive contato
                </Title>
                <div className={styles.icones}>
                    {TechnologiesDB.lessUsedTechnologies.map((element) => {
                        return (
                            <i
                                className={element.icon}
                                key={element.title}
                                title={element.title}
                            ></i>
                        );
                    })}
                </div>
            </div>
            <div className={styles.categoria}>
                <Title>
                    Conceitos e Soft Skills
                </Title>
                <div className={styles.icones}>
                    {TechnologiesDB.softSkills.map((element) => {
                        return <Tag key={element}> {element} </Tag>;
                    })}
                </div>
            </div>
        </section>
    );
}
