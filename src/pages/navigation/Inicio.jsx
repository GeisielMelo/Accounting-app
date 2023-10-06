import { styled } from "styled-components";
import React from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 10px; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 40px;
`;

const Subtitle = styled.p`
  margin: 30px 0;
`;

const Inicio = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Sistema Tars</Title>
        <Subtitle>Bem vindo ao sistema de gerenciamento de tars</Subtitle>
      </Container>
    </Wrapper>
  );
};

export default Inicio;
