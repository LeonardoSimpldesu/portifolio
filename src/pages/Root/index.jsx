import React from "react";
import { Outlet } from "react-router-dom";

import Menu from "../../components/Menu";
import styled from "styled-components";
import GlobalStyles from "../../components/GlobalStyles";


const Corpo = styled.div`
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

/* 2xl */
@media (max-width: 1536px) {
  &{
    max-width: 1280px;
  }
}

/* xl */
@media (max-width: 1280px) {
  &{
    max-width: 1024px;
  }
}

/* lg */
@media (max-width: 1024px) {
  &{
    max-width: 768px;
  }
}

/* md */
@media (max-width: 768px) {
  &{
    max-width: 640px;
  }
}

/* sm */
@media (max-width: 640px) {
  &{
    max-width: 475px;
  }
}

/* xs */
@media (max-width: 475px) {
  &{
    width: 100%;
  }
}
`;

const Container = styled.main`
    min-height: 90vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Root() {
    return (
        <Corpo>
            <GlobalStyles/>
            <Menu />
            <Container>
                <Outlet />
            </Container>
        </Corpo>
    );
}
