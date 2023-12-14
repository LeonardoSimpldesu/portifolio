import React from "react";

import styled from "styled-components";

const Container = styled.section`
    display: flex;
    align-items: center;
    gap: 5rem;

    background-color: var(--dark-color-background);
    color: var(--dark-color-text-primary);

    height: 100%;
    width: 100%;

    @media (max-width: 768px) {
    &{
        flex-direction: column-reverse;
        gap: 0;
    }
}
    @media (max-width: 640px) {
    &{
        padding: 2rem 0;
    }
}
`;

const Button = styled.button`
    background: 
    ${props => props.$primary ? "none" : "var(--color-secundary)"};
    border-color: 
    ${props => props.$primary ? "var(--color-primary)" : "var(--color-secundary)"};
    color: 
    ${props => props.$primary ? "var(--color-primary)" : "var(--dark-color-text-primary)"};
    margin-right: 
    ${props => props.$primary ? "2rem" : "0"};

    cursor: pointer;
    border-radius: 0.5rem;
    padding: 1rem 1.125rem;
    font-family: var(--font-body);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-width: 2px;
    border-style: solid;
    transition: all 0.2s ease-out;

    &:hover{ 
    background: 
    ${props => props.$primary ? "var(--color-primary)" : "var(--color-secundary)"};
    color:
    ${props => props.$primary ? "var(--dark-color-text-primary)" : ""};
    -webkit-box-shadow: 
    ${props => props.$primary ? "4px 4px 22px 4px rgba(255, 137, 6, 0.3)" : "4px 4px 42px 4px rgba(16, 36, 50, 0.3)"};
    -moz-box-shadow: ${props => props.$primary ? "4px 4px 22px 4px rgba(255, 137, 6, 0.3)" : "4px 4px 42px 4px rgba(16, 36, 50, 0.3)"};
    box-shadow: ${props => props.$primary ? "4px 4px 22px 4px rgba(255, 137, 6, 0.3)" : "4px 4px 42px 4px rgba(16, 36, 50, 0.3)"};

    transform: scale(1.01);
    }
`;

const Texts = styled.div`
    margin-right: auto;

    @media (max-width: 768px) {
    &{
        text-align: center;
    }
    }
`;

const Title = styled.h1`
    font-family: var(--font-title);
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: 768px) {
    &{
       margin: 0;
       margin-top: 2rem;
    }
    }
`;

const TitleEmphasis = styled.span`
    color: var(--color-primary);
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Summary = styled.p`
    max-width: 80ch;
    font-family: var(--font-body);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.1875rem;
    margin: 1rem 0;

    @media (max-width: 768px) {
    &{
       margin: 0;
       margin-bottom: 1rem;
    }
    }
`;

const Emphasis = styled.span`
    color: var(--color-primary);
`;

const Profile = styled.img`
    width: 14.58331rem;
    border-radius: 0.625rem;
    border: 1px solid var(--color-primary);
    
    @media (max-width: 768px) {
    &{
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
    }
    }
`;

export default function Home() {
    return (
        <Container>
            <Texts>
                <Title>Meu nome é Leonardo e sou <br></br>
                    <TitleEmphasis> Desenvolvedor Front-End</TitleEmphasis>
                </Title>
                    
                <Summary>Olá, meu nome é Leonardo, e sou um desenvolvedor front-end. Tenho experiências em criar websites intuitivo usando <Emphasis> HTML </Emphasis>, <Emphasis>CSS</Emphasis>, <Emphasis>JavaScript</Emphasis> e <Emphasis>ReactJs</Emphasis>. Possou habilidades de design, além de técnicas de codificação</Summary>

                <Button $primary>Entre em Contato</Button>
                <Button>Curriculo PDF</Button>
            </Texts>
            <Profile src={window.innerWidth <= 768 ? "./perfil-circle.jpg" : "./perfil.png"} alt="Foto de Leonardo"/>
        </Container>
    );
}
