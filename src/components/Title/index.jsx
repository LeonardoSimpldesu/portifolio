/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Title.module.css";

export default function Title({children}) {
    return (
        <h1 className={styles.titulo}>
            {children}
        </h1>
    );
}
