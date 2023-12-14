import React from "react";
// eslint-disable-next-line no-unused-vars
import { SunIcone, MoonIcon } from "../Icon/index";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navegacao = styled.nav`
  display: flex;
  padding: 1.25rem 0;
  justify-content: space-between;
  align-items: center;
`;

const ListaLinks = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;

  a{
    color: var(--dark-color-text-primary);
    text-decoration: none;
  }
  a.active {
    font-weight: 700;
  }
  
`;

const OutrosLinks = styled.li`
  display: flex;
  gap: 1rem;
  i {
    font-size: 2rem;
  }
  i:hover {
    -webkit-box-shadow: 4px 4px 22px 4px rgba(255, 255, 255, 0.3);
    -moz-box-shadow: 4px 4px 22px 4px rgba(255, 255, 255, 0.3);
    box-shadow: 4px 4px 22px 4px rgba(255, 255, 255, 0.3);

    transition: all 0.2s ease-out;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default function Menu() {
    return (
        <Navegacao>
            <SunIcone />
            <ListaLinks>
                <li>
                    <NavLink to={"/"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/Habilidades"}>
                        Habilidades
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/Projects"}>
                        Projetos
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/Contact"}>
                        Contato
                    </NavLink>
                </li>
            </ListaLinks>
            <OutrosLinks>
                <a href="https://github.com/LeonardoSimpldesu">
                    <i className="devicon-github-original"></i>
                </a>
                <a href="https://www.linkedin.com/in/leonardo-de-souza-almeida-101541241/">
                    <i className="devicon-linkedin-plain"></i>
                </a>
            </OutrosLinks>
        </Navegacao>
    );
}
