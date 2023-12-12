import React from "react";
import { Outlet } from "react-router-dom";

import Menu from "../../components/Menu";
import styled from "styled-components";

const Corpo = styled.div`
  min-height: 100vh;
`;

const Container = styled.main`
    padding: 0 12.5rem;
    min-height: 90vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Root() {
    return (
        <Corpo>
            <Menu />
            <Container>
                <Outlet />
            </Container>
        </Corpo>
    );
}
