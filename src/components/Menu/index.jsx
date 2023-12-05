import React from "react";
import styles from "./Menu.module.css";
// eslint-disable-next-line no-unused-vars
import { SunIcone, MoonIcon} from "../Icon/index";

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <SunIcone/>
            <ul className={styles.lista}>
                <li>Home</li>
                <li>Habilidades</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>
            <div className={styles.links}> 
                <i className="devicon-github-original"></i>
                <i className="devicon-linkedin-plain"></i>
            </div>
        </nav>
    );
}
