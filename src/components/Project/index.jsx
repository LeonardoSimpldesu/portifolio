/* eslint-disable react/prop-types */
import React from "react";
import {TechnologiesTags} from "../TechnologiesTags";

import styled from "styled-components";

const Container = styled.div`
    max-width: 30rem;
    width: fit-content;
    text-align: center;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    align-self: stretch;
    border-radius: .25rem;
`;

const Texts = styled.div`
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;
    padding: .75rem 1rem;
`;

const Title = styled.h3`
    width: fit-content;
    color: var(--dark-color-text-primary);
    text-align: center;
    font-family: var(--font-title);
    font-size: 1.5rem;
    font-weight: 700;
    border-bottom: 1px solid var(--Cor-Primaria, #FF8906);
`;

const Description = styled.div`
    width: fit-content;
`;

const Tags = styled.div`
    display: flex;
    gap: .5rem;
`;

export default function Project(props) {
    return (
        <Container>
            <Image src={`/images/project_${props.image}.png`} alt="Projeto"/>
            <Texts>
                <Title>{props.title}</Title>
                <Description>
                    {props.description}
                </Description>
                <Tags>
                    {props.tags.map((tag)=>{
                        return(
                            <TechnologiesTags key={tag}>
                                {tag}
                            </TechnologiesTags>
                        );
                    })}
                </Tags>
            </Texts>
        </Container>
    );
}
