/* eslint-disable react/prop-types */

import styled from "styled-components";

export const Tag = styled.p`
    padding: 0.625rem 1.25rem;
    border-radius: 0.3125rem;
    border: 1px solid var(--color-primary);
    width: max-content;
    transition: all 0.2s;
    cursor: default;

    &:hover{
    background: var(--color-primary);
    transition: all 0.2s;
    }
`;