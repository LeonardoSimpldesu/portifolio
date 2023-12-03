import React from "react";
import styles from "./home.module.css";

export default function Home() {
    return (
        <section className={styles.main}>
            <div className={styles.texts}>
                <h1 className={styles.title}>Meu nome é Leonardo e sou <br></br>
                    <span className={styles.title_emphasis}> Desenvolvedor Front-End</span>
                </h1>
                    
                <p className={styles.summary}>Olá, meu nome é Leonardo, e sou um desenvolvedor front-end. Tenho experiências em criar websites intuitivo usando <span className={styles.emphasis}> HTML </span>, <span className={styles.emphasis}>CSS</span>, <span className={styles.emphasis}>JavaScript</span> e <span className={styles.emphasis}>ReactJs</span>. Possou habilidades de design, além de técnicas de codificação</p>

                <button className={styles.btn_primary}>Habilidades e Projetos</button>
                <button className={styles.btn_secundary}>Curriculo PDF</button>
            </div>
            <img src="./perfil.png" alt="Foto de Leonardo" className={styles.profile} />
        </section>
    );
}
