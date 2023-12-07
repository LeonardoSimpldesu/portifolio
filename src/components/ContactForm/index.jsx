/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({children, title, information}) {
    return (
        <div className={styles.option}>
            <div className={styles.icon}>
                {children}
            </div>
            <div className={styles.texts}>
                <h4>{title}</h4>
                <p>{information}</p>
            </div>
        </div>
    );
}
