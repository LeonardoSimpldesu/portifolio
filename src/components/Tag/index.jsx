/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Tag.module.css";

export default function Tag({children}) {
    return (
        <p className={styles.tag} title={children}>{children}</p>
    );
}
