import React from "react";
import styled from "styled-components";
import { AnimatedLogo } from "../AnimatedLogo";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 700px;
  padding: 100px 20px;
  text-align: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: clamp(16px, 5vw, 28px);
  font-family: ${(props) => props.theme.font.family.one};
`;

const Description = styled.p`
  margin: 40px 0;
  font-size: 18px;
  font-family: ${(props) => props.theme.font.family.one};
  line-height: 1.5;
`;

const Buttons = styled.div`
  button {
    width: 180px;
    height: 40px;
    margin: 10px;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 5px;
    font-family: ${(props) => props.theme.font.family.one};
    &:hover {
      box-shadow: 0 0 5px black;
    }
  }
  .left {
    background: transparent;
    border: 1px solid black;
  }
  .right {
    background: black;
    color: white;
    border: 1px solid white;
  }
`;

const Hero = () => {
  return (
    <Section id="hero">
      <Container>
        <Title>
          <h1>Connect everything.</h1>
          <AnimatedLogo />
          <h1>Build anything.</h1>
        </Title>

        <Description>
          App is the modern web development platform for Enterprises to realize the full potential of a scalable, customizable web architecture.
        </Description>

        <Buttons>
          <button className="left" onClick={() => alert("Download Now")}>
            Saiba mais
          </button>
          <button className="right" onClick={() => alert("Demo Requested")}>
            Request Demo
          </button>
        </Buttons>
      </Container>
    </Section>
  );
};

export default Hero;
