import { styled } from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  h1 {
    font-family: ${(props) => props.theme.font.family.one};
    margin: 10px 0;
  }
  button {
    margin: 10px 0;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0 0 5px #000;
    font-family: ${(props) => props.theme.font.family.one};
    transition: 0.2s;
    &:hover {
      box-shadow: 0 0 5px #220fef;
      font-weight: bold;
    }
  }
`;

const Index = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <h1>Tars serviços dev build</h1>
      <button onClick={() => navigate("/home")}>Area de clientes</button>
      <button onClick={() => navigate("/sign-in")}>Entrar</button>
      <button onClick={() => navigate("/sign-up")}>Registrar</button>
    </Section>
  );
};

export default Index;
