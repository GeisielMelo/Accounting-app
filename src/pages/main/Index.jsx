import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Nav from "../../components/index/Nav";
import Hero from "../../components/index/Hero";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Nav isAuthenticated={isLoggedIn} isMobile={isMobile} />

      <Section>
        <Hero />
      </Section>

      <Section>
        <h1>Tars serviços dev build</h1>
      </Section>
    </>
  );
};

export default Index;
