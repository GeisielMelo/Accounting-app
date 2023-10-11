import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 700px;
  padding: 100px 20px;
  text-align: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 28px;
  font-family: ${(props) => props.theme.font.family.one};

`;

const Description = styled.p`
  margin: 40px 0;
  font-size: 18px;
`;

const Buttons = styled.div`
  button {
    width: 180px;
    height: 40px;
    margin: 10px;
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

const Animation = styled.div`
  width: 50px;
  height: 50px;
  margin: 40px;
  background-color: red;
`;

const Hero = () => {
  return (
    <Container>
      <Title>
        <h1>Connect everything.</h1>
        <Animation />
        <h1>Build anything.</h1>
      </Title>

      <Description>
        App is the modern web development platform for Enterprises to realize the full potential of a scalable, customizable web architecture.
      </Description>

      <Buttons>
        <button>Learn More</button>
        <button>Request Demo</button>
      </Buttons>
    </Container>
  );
};

export default Hero;
