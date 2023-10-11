import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import logo from "../../assets/img/logo.png";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  z-index: 2;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 80px;
  padding: 0 20px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 20px;

  span {
    display: flex;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 40px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  button {
    height: 40px;
    width: max-content;
    padding: 0 10px;
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

const Nav = ({ isAuthenticated, isMobile }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Logo src={logo} alt="logo" />
        {!isMobile ? (
          <>
            <Navigation>
              <span>
                <a href="#">Home</a>
                <a href="#">Pricing</a>
                <a href="#">Newsletter</a>
              </span>
              <a href="#">Contact</a>
            </Navigation>
            <Buttons>
              {isAuthenticated ? (
                <>
                  <button onClick={() => navigate("/home")}>Área de Clientes</button>
                </>
              ) : (
                <>
                  <button onClick={() => navigate("/sign-in")}>Entrar</button>
                  <button onClick={() => navigate("/sign-up")}>Registrar</button>
                </>
              )}
            </Buttons>
          </>
        ) : (
          <>
          
            {isMobileMenuOpen ? <MenuOpenIcon onClick={() => setIsMobileMenuOpen(false)} /> : <MenuIcon onClick={() => setIsMobileMenuOpen(true)} />}
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Nav;
