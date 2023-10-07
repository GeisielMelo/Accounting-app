import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import Profile from "../../components/Profile";
import UpDownArrowBtn from "../../components/UpDownArrowBtn";

import HomeIcon from "@mui/icons-material/Home";
import InsertPageBreakIcon from "@mui/icons-material/InsertPageBreak";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

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
  max-width: ${(props) => (props["data-show"] ? "250px" : "50px")};
  width: 100%;
  transition: all 0.3s;
  border-right: 1px solid #e8e7ee;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  overflow: auto;
  padding: 0px 10px 10px 10px;
`;

const Title = styled.div`
  position: ${(props) => (props["data-show"] ? "static" : "absolute")};
  top: ${(props) => (props["data-show"] ? "0" : "-60px")};
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #fff;
  border-bottom: ${(props) => (props["data-show"] ? "1px solid" : "none")};
  border-color: #e8e7ee;
  font-family: ${(props) => props.theme.font.family.one};
  h1 {
    font-size: 24px;
  }
`;

const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  padding: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props["data-centralized"] ? "left" : "center")};
  color: ${(props) => (props["data-last-pressed"] ? "#6453e4" : "#3b3b4f")};
  background-color: ${(props) => (props["data-last-pressed"] ? "#f3f0ff" : "#fff")};
  max-width: 220px;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  margin: 2px 0;
  border-radius: ${(props) => (props["data-centralized"] ? "6px" : "0px")};
  &:hover {
    background-color: #f5f5fa;
  }

  p {
    margin-left: 10px;
    animation: fadeIn 0.5s ease-in-out;
    font-family: ${(props) => props.theme.font.family.two};
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

const Workbench = ({ children, title, page }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTitleOpen, setIsTitleOpen] = useState(true);
  const [showButtonText, setShowButtonText] = useState(false);
  const [disableMenu, setDisableMenu] = useState(false);

  useEffect(() => {
    if (disableMenu) {
      setTimeout(() => {
        setDisableMenu(false);
      }, 600);
    }
  }, [disableMenu]);

  const handleButtonClick = (route) => {
    navigate(route);
  };

  const handleMenuClick = () => {
    setDisableMenu(true); // disable menu for a few seconds to avoid spamming.
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
      <Profile />
      <UpDownArrowBtn onClick={() => setIsTitleOpen(!isTitleOpen)} />
      <Menu data-show={isMenuOpen}>
        <LogoImg src={Logo} />

        <Button data-centralized={isMenuOpen} data-last-pressed={page === "0"} onClick={() => handleButtonClick("/home")}>
          <HomeIcon /> {showButtonText && <p>Inicio</p>}
        </Button>
        <Button data-centralized={isMenuOpen} data-last-pressed={page === "1"} onClick={() => handleButtonClick("/quebrar-arquivo")}>
          <InsertPageBreakIcon /> {showButtonText && <p>Quebrar arquivo</p>}
        </Button>
        <Button data-centralized={isMenuOpen} data-last-pressed={page === "2"} onClick={() => handleButtonClick("/extrato-bancario")}>
          <PlagiarismIcon /> {showButtonText && <p>Lançamento de Extrato</p>}
        </Button>
        <Button data-centralized={isMenuOpen} data-last-pressed={page === "3"} onClick={() => handleButtonClick("/atualizar-usuario")}>
          <ManageAccountsIcon /> {showButtonText && <p>Atualizar Cadastro</p>}
        </Button>
        <Button data-centralized={isMenuOpen} data-last-pressed={page === "4"} onClick={() => handleButtonClick("/cadastro-clientes")}>
          <PersonAddIcon /> {showButtonText && <p>Cadastro Clientes</p>}
        </Button>
        <Button data-centralized={isMenuOpen} data-last-pressed={page === "5"} onClick={() => handleButtonClick("/cadastro-conta-contabil")}>
          <AssignmentIndIcon /> {showButtonText && <p>Cadastro Conta Contábil</p>}
        </Button>
        <Button data-centralized={isMenuOpen} data-last-pressed={page === "6"} onClick={() => handleButtonClick("/cadastro-plano-contas")}>
          <ZoomOutMapIcon /> {showButtonText && <p>Plano de Contas Geral</p>}
        </Button>
        <Button data-centralized={isMenuOpen} data-last-pressed={page === "7"} onClick={() => handleButtonClick("/cadastro-depara-historico")}>
          <AssignmentIcon /> {showButtonText && <p>Depara Histórico</p>}
        </Button>
        <Button data-centralized={isMenuOpen} disabled={disableMenu} onClick={handleMenuClick}>
          {isMenuOpen ? <MenuOpenIcon /> : <MenuIcon />} {showButtonText && <p>Menu ON/OFF</p>}
        </Button>
      </Menu>
      <Content>
        <Title data-show={isTitleOpen}>
          <h1>{title}</h1>
        </Title>
        {children}
      </Content>
    </Section>
  );
};

export default Workbench;
