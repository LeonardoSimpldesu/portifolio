import React from "react";
import {Tag} from "../../components/Tag";
import TechnologiesDB from "../../json/Technologies.json";
import {Title} from "../../components/Title";

import styled from "styled-components";

export const Container = styled.section`
    @media (max-width: 1024px) {
    &{
        padding-bottom: 2rem;
    }
}
`;

export const Icones = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1.5rem;
    gap: 1.125rem;
    i{
    font-size: 5rem;
}
`;


export default function Habilidades() {
    return (
        <Container>
            <div>
                <Title>Tecnologias usadas no meu dia a dia</Title>
                <Icones>
                    {TechnologiesDB.mostUsedTechnologies.map((element) => {
                        return (
                            <i
                                className={element.icon}
                                key={element.title}
                                title={element.title}
                            ></i>
                        );
                    })}
                </Icones>
            </div>
            <div>
                <Title>
                    Tecnologias que tive contato
                </Title>
                <Icones>
                    {TechnologiesDB.lessUsedTechnologies.map((element) => {
                        return (
                            <i
                                className={element.icon}
                                key={element.title}
                                title={element.title}
                            ></i>
                        );
                    })}
                </Icones>
            </div>
            <div>
                <Title>
                    Conceitos e Soft Skills
                </Title>
                <Icones>
                    {TechnologiesDB.softSkills.map((element) => {
                        return <Tag title={element.title} key={element}> {element} </Tag>;
                    })}
                </Icones>
            </div>
        </Container>
    );
}
