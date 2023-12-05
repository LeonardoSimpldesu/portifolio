import React from "react";
import styles from "./Habilidades.module.css";
import Tecnologias from "../../components/Tecnologias";

export default function Habilidades() {
    return (
        <section className={styles.habilidades}>
            <Tecnologias 
                titulo="Tecnologias usadas no meu dia a dia"

            />
            <Tecnologias 
                titulo="Tecnologias que tive contato"
            />

            <Tecnologias 
                titulo="Conceitos e Soft Skills"
            />
        </section>
    );
}
