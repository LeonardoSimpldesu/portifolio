import React from "react";

import Title from "../../components/Title";
import Tag from "../../components/Tag";
import Project from "../../components/Project";

import ProjectsJson from "../../json/Projects.json";

import styled from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Filters = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
`;

const ProjectList = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
`;


export default function Projects() {
    return (
        <Container>
            <Title>
                Projetos Em Destaque
            </Title>
            <Filters>
                <Tag>Recentes</Tag>
                <Tag>Antigos</Tag>
                <Tag>Complexos</Tag>
            </Filters>
            <ProjectList>
                {ProjectsJson.map((item) => {
                    return(
                        <Project {...item} key={item.id}/>
                    );
                })}
            </ProjectList>
        </Container>
    );
}
