import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assets/img/logo.png";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const RotatingDiv = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid #000;
  border-radius: 50%;
  animation: ${rotateAnimation} 8s linear infinite;
  border-style: dashed;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100px;
  height: 100px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 40px;
`;

export const AnimatedLogo = () => {
  return (
    <Container>
      <RotatingDiv />
      <Image src={logo} alt="logo" />
    </Container>
  );
};
