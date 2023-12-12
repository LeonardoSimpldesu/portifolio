/* eslint-disable react/react-in-jsx-scope */
import {
    createBrowserRouter
} from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import Habilidades from "./pages/Habilidades";
import Projects from "./pages/Projects";

import Contact from "./pages/Contact";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/Habilidades",
                element: <Habilidades />,
            },
            {
                path: "/Projects",
                element: <Projects />,
            },
            {
                path: "/Contact",
                element: <Contact />,
            },
        ],
    }
]);