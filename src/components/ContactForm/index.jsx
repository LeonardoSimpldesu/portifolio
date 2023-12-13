/* eslint-disable react/prop-types */
import React from "react";

import styled from "styled-components";

const Option = styled.div`
    display: flex;
    gap: 1rem;
`;
const Icon = styled.div`
    width: fit-content;
    display: flex;
    padding: 0.75rem;
    align-items: center;
    border-radius: 0.25rem;
    background: var(--color-primary);
`;
const Texts = styled.h4`
    font-size: 0.75rem;
    font-weight: 700;
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
