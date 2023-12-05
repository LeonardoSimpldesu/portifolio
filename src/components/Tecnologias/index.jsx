import React from "react";
import styles from "./Tecnologias.module.css";

export default function Tecnologias() {

    return (
        <>
            <h1 className={styles.titulo}>
                Titulo
            </h1>
            <div className={styles.icones}>
                
                <i className="devicon-nodejs-plain colored"></i>
          
                <i className="devicon-html5-plain-wordmark colored"></i>
          
                <i className="devicon-react-original-wordmark colored"></i>
          
                <i className="devicon-css3-plain-wordmark colored"></i>
          
                <i className="devicon-javascript-plain colored"></i>
          
                <i className="devicon-typescript-plain colored"></i>
          
                <i className="devicon-eslint-original colored"></i>
          
            </div>

        </>
    );
}