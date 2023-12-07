import React from "react";
import "./reset.css";
import "./globals.css";
import Menu from "./components/Menu";
// import Home from "./pages/Home";
// import Habilidades from "./pages/Habilidades";
// import Projects from "./pages/Projects";
import Container from "./components/Container";
import styles from "./App.module.css";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className={styles.body}>
            <Menu/>
            <Container>
                <Contact/>
            </Container>
        </div>
    );
}

export default App;
