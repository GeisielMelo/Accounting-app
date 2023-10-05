import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

import HomeIcon from "@mui/icons-material/Home";
import InsertPageBreakIcon from "@mui/icons-material/InsertPageBreak";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Section = styled.section`
  display: flex;
  height: 100vh;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 260px;
  width: 100%;
  background-color: #b9b5b5;
  transition: all 0.3s;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  overflow: auto;
`;

const Title = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  background-color: #b9b5b5;
  height: 50px;
  h1 {
    font-size: 24px;
    padding: 0 10px;
  }
`;

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid #000;
`;

const Workbench = ({ children }) => {
  const [title, setTitle] = useState("Inicio");
  const navigate = useNavigate();

  const handleButtonClick = (route, title) => {
    navigate(route);
    setTitle(title);
  };

  return (
    <Section>
      <Menu>
        <LogoImg src={Logo} />
        <Button onClick={() => handleButtonClick("/home", "Inicio")}>
          <HomeIcon /> Inicio
        </Button>
        <Button onClick={() => handleButtonClick("/quebrar-arquivo", "Quebrar arquivo")}>
          <InsertPageBreakIcon /> <p>Quebrar arquivo</p>
        </Button>
        <Button onClick={() => handleButtonClick("/extrato-bancario", "Lançamento Extrato Bancário")}>
          <PlagiarismIcon /> <p>Lançamento Extrato Bancário</p>
        </Button>
        <Button onClick={() => handleButtonClick("/atualizar-usuario", "Atualizar Cadastro Usuário")}>
          <ManageAccountsIcon /> <p>Atualizar Cadastro Usuário</p>
        </Button>
        <Button onClick={() => handleButtonClick("/cadastro-clientes", "Cadastro Clientes")}>
          <PersonAddIcon /> <p>Cadastro Clientes</p>
        </Button>
        <Button onClick={() => handleButtonClick("/cadastro-conta-contabil", "Cadastro Conta Contábil")}>
          <AssignmentIndIcon /> <p>Cadastro Conta Contábil</p>
        </Button>
        <Button onClick={() => handleButtonClick("/cadastro-plano-contas", "Cadastro Plano de Contas Geral")}>
          <AssignmentIcon /> <p>Cadastro Plano de Contas Geral</p>
        </Button>
        <Button onClick={() => handleButtonClick("/cadastro-depara-historico", "Cadastro Depara Histórico")}>
          <AssignmentIcon /> <p>Cadastro Depara Histórico</p>
        </Button>
        <Button onClick={() => handleButtonClick("/usuario", "Usuário")}>
          <AccountCircleIcon />
        </Button>
      </Menu>
      <Content>
        <Title>
          <h1>{title}</h1>
        </Title>
        {children}
      </Content>
    </Section>
  );
};

export default Workbench;
