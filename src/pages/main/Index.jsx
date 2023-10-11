import React, { useState, useEffect } from "react";
import Nav from "../../components/index/Nav";
import Hero from "../../components/index/Hero";
import Footer from "../../components/index/Footer";

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
      <Hero />
      <Footer/>
    </>
  );
};

export default Index;
