import React from "react";
import Title from "../../components/Title";
import ContactForm from "../../components/ContactForm";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

import styled from "styled-components";

const Container = styled.section`
  width: 100%;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 5rem;
    align-items: center;
`;

const Description = styled.p`
    color: var(--dark-color-text-primary);
    text-align: center;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 2.1875rem;
    width: 100ch;
`;

const Group = styled.div`
    display: flex;
    align-items: center;
    gap: 5rem;

    h3 {
    color: var(--dark-color-text-primary);
    font-family: var(--font-title);
    font-size: 1.5rem;
    font-weight: 700;
}
`;

const Information = styled.div`
    display: flex;
    padding: 2.5rem 2rem;
    flex-direction: column;

    border-radius: 0.5rem;
    background: var(--color-secundary);
`;

const Options = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Form = styled.form`
    width: 100%;
    display: grid;
    grid-column-gap: 10%;
    grid-row-gap: 10%;
    grid-template-columns: 45% 45%;
    grid-template-rows: 1fr 1fr 2fr 1fr;
`;

const FormField = styled.div`
    display: flex;
    flex-direction: column;

    label{
        font-size: 1rem;
        font-weight: 700;
    }

    input{
        padding: .5rem .25rem;
        color: var(--dark-color-text-primary);
        border: none;
        border-bottom: 1px solid var(--color-primary);
        background: none;
        font-family: var(--font-body);
        font-size: 1rem;
    }

    textarea{
    background: none;
    border: none;
    border-radius: 0.25rem;
    color: var(--dark-color-text-primary);
    border: 1px solid var(--color-primary);
    font-family: var(--font-body);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }

    gap: 
    ${props => props.$message ? ".5rem" : ""};
    width: 
    ${props => props.$message ? "100%" : ""};
    grid-column-start: 
    ${props => props.$message ? "1" : ""};
    grid-column-end: 
    ${props => props.$message ? "3" : ""};
`;

const Submit = styled.input`
    width: fit-content;
    padding: 1rem 1.125rem;
    border: none;
    border-radius: 0.5rem;
    background: var(--color-primary);
    color: var(--dark-color-text-primary);
    font-size: 1.125rem;
    font-weight: 700;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
`;

export default function Contact() {
    return (
        <Container>
            <Header>
                <Title>Entre em Contato Comigo</Title>
                <Description>
          Estou à disposição para discutir oportunidades de colaboração,
          responder a consultas e explorar projetos inovadores. Preencha o
          formulário abaixo, e entrarei em contato rapidamente para discutir
          como posso contribuir para o sucesso do seu projeto.
                </Description>
            </Header>
            <Group>
                <Information>
                    <h3>Informações para contato</h3>
                    <p>Outras formas de me contatar</p>

                    <Options>
                        <ContactForm
                            title="Telefone"
                            information="+55 31 98378-1618"
                        >
                            <FaPhoneAlt />
                        </ContactForm>
                        <ContactForm
                            title="E-mail"
                            information="leonardodesouzaalmeidas@gmail.com"
                        >
                            <FaEnvelope />
                        </ContactForm>
                        <ContactForm
                            title="Endereço"
                            information="Belo Horizonte - MG"
                        >
                            <FaLocationArrow />
                        </ContactForm>
                    </Options>
                </Information>
                <Form>
                    <FormField>
                        <label htmlFor="">Assunto Do E-mail</label>
                        <input type="text" />
                    </FormField>
                    <FormField>
                        <label htmlFor="">Seu E-mail</label>
                        <input type="text" />
                    </FormField>
                    <FormField>
                        <label htmlFor="">Nome</label>
                        <input type="text" />
                    </FormField>
                    <FormField>
                        <label htmlFor="">Telefone</label>
                        <input type="text" />
                    </FormField>
                    <FormField $message>
                        <label htmlFor="">Mensagem</label>
                        <textarea type="text-box" rows="5" cols="33"/>
                    </FormField>
                    <Submit type="submit" value="Enviar Email"/>
                </Form>
            </Group>
        </Container>
    );
}
