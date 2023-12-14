/* eslint-disable react/prop-types */
import React from "react";

import styled from "styled-components";

const Option = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 1024px) {
    & {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
    p{
        font-size: 1rem;
    }
  }
  
`;
const Icon = styled.div`
    width: fit-content;
    display: flex;
    padding: 0.75rem;
    align-items: center;
    border-radius: 0.25rem;
    background: var(--color-primary);

    @media (max-width: 1024px) {
    & {
        font-size: 2rem;
    }
  }
`;
const Texts = styled.h4`
    font-size: 0.75rem;
    font-weight: 700;

    @media (max-width: 1024px) {
    & {
        font-size: 1.25rem;
    }
  }
`;


export default function ContactForm({children, title, information}) {
    return (
        <Option>
            <Icon>
                {children}
            </Icon>
            <div>
                <Texts>{title}</Texts>
                <p>{information}</p>
            </div>
        </Option>
    );
}
