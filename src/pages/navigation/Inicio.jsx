import { styled } from "styled-components";
import React from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: silver;
  width: 100%;
  height: 100%;
  box-shadow: 0px 2px 5px #000;
  border-radius: 8px;
`;

const CompanyName = styled.h1`
  font-size: 40px;
`;

const Subtitle = styled.p`
  margin: 30px 0;
`;

const Inicio = () => {
  return (
    <Wrapper>
      <Container>
        <CompanyName>Sistema Tars</CompanyName>
        <Subtitle>Bem vindo ao sistema de gerenciamento de tars</Subtitle>
      </Container>
    </Wrapper>
  );
};

export default Inicio;
