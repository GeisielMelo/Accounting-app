import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import Profile from "../../components/Profile"

import HomeIcon from "@mui/icons-material/Home";
import InsertPageBreakIcon from "@mui/icons-material/InsertPageBreak";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";

const Section = styled.section`
  display: flex;
  height: 100vh;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${(props) => (props.show ? "250px" : "50px")};
  width: 100%;
  background-color: #b9b5b5;
  transition: all 0.3s;
  border-right: 1px solid black;
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
  height: 60px;
  h1 {
    font-size: 24px;
    padding: 0 10px;
  }
`;

const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  padding:  10px;
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 0 10px;
  p {
    animation: fadeIn 0.5s ease-in-out;
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const Workbench = ({ children }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showButtonText, setShowButtonText] = useState(false);
  const [disableMenu, setDisableMenu] = useState(false);

  useEffect(() => {
    if (disableMenu) {
      setTimeout(() => {
        setDisableMenu(false);
      }, 600);
    }
  }, [disableMenu]);

  const handleButtonClick = (route, title) => {
    navigate(route);
    setTitle(title);
  };

  const handleMenuClick = () => {
    setDisableMenu(true);
    setIsMenuOpen(!isMenuOpen);

    if (isMenuOpen) {
      setShowButtonText(false);
    } else {
      setTimeout(() => {
        setShowButtonText(true);
      }, 500);
    }
  };

  return (
    <Section>
      <Menu show={isMenuOpen}>
        <LogoImg src={Logo} />
        <Profile />
        <Button onClick={() => handleButtonClick("/home", "Inicio")}>
          <HomeIcon /> {showButtonText && <p>Inicio</p>}
        </Button>
        <Button onClick={() => handleButtonClick("/quebrar-arquivo", "Quebrar arquivo")}>
          <InsertPageBreakIcon /> {showButtonText && <p>Quebrar arquivo</p>}
        </Button>
        <Button onClick={() => handleButtonClick("/extrato-bancario", "Lançamento Extrato Bancário")}>
          <PlagiarismIcon /> {showButtonText && <p>Lançamento Extrato Bancário</p>}
        </Button>
        <Button onClick={() => handleButtonClick("/atualizar-usuario", "Atualizar Cadastro Usuário")}>
          <ManageAccountsIcon /> {showButtonText && <p>Atualizar Cadastro Usuário</p>}
        </Button>
        <Button onClick={() => handleButtonClick("/cadastro-clientes", "Cadastro Clientes")}>
          <PersonAddIcon /> {showButtonText && <p>Cadastro Clientes</p>}
        </Button>
        <Button onClick={() => handleButtonClick("/cadastro-conta-contabil", "Cadastro Conta Contábil")}>
          <AssignmentIndIcon /> {showButtonText && <p>Cadastro Conta Contábil</p>}
        </Button>
        <Button onClick={() => handleButtonClick("/cadastro-plano-contas", "Cadastro Plano de Contas Geral")}>
          <ZoomOutMapIcon /> {showButtonText && <p>Cadastro Plano de Contas Geral</p>}
        </Button>
        <Button onClick={() => handleButtonClick("/cadastro-depara-historico", "Cadastro Depara Histórico")}>
          <AssignmentIcon /> {showButtonText && <p>Cadastro Depara Histórico</p>}
        </Button>
        <Button disabled={disableMenu} onClick={handleMenuClick}>
          {isMenuOpen ? <MenuOpenIcon /> : <MenuIcon />} {showButtonText && <p>Menu ON/OFF</p>}
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
