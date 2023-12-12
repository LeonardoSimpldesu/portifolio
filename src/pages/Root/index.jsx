import React from "react";
import styles from "./Root.module.css";
import { Outlet } from "react-router-dom";

import Container from "../../components/Container";
import Menu from "../../components/Menu";

export default function Root() {
    return (
        <div className={styles.body}>
            <Menu/>
            <Container>
                <Outlet/>
            </Container>
        </div>
    );
}
