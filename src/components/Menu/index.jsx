import React from "react";
import styles from "./Menu.module.css";
// eslint-disable-next-line no-unused-vars
import { SunIcone, MoonIcon} from "../Icon/index";
import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <SunIcone/>
            <ul className={styles.lista}>
                <li><NavLink className={styles.link} to={"/"}>Home</NavLink></li>
                <li><NavLink className={styles.link} to={"/Habilidades"}>Habilidades</NavLink></li>
                <li><NavLink className={styles.link} to={"/Projects"}>Projetos</NavLink></li>
                <li><NavLink className={styles.link} to={"/Contact"}>Contato</NavLink></li>
            </ul>
            <div className={styles.links}> 
                <a href="https://github.com/LeonardoSimpldesu"><i className="devicon-github-original"></i></a>
                <a href="https://www.linkedin.com/in/leonardo-de-souza-almeida-101541241/"><i className="devicon-linkedin-plain"></i></a>
            </div>
        </nav>
    );
}
