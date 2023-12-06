/* eslint-disable react/prop-types */
import React from "react";
import styles from "./TechnologiesTags.module.css";

export default function TechnologiesTags({children}) {
    return (
        <p className={styles.tag}>{children}</p>
    );
}
