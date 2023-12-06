/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Project.module.css";
import TechnologiesTags from "../TechnologiesTags";

export default function Project(props) {
    return (
        <div className={styles.container}>
            <img src={`/images/project_${props.image}.png`} alt="Projeto" className={styles.image}/>
            <div className={styles.texts}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.description}>
                    {props.description}
                </p>
                <div className={styles.tags}>
                    {props.tags.map((tag)=>{
                        return(
                            <TechnologiesTags key={tag}>
                                {tag}
                            </TechnologiesTags>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
