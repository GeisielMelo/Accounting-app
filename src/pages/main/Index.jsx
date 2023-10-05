import React from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h1>Tars serviços...</h1>
      <button onClick={() => navigate("/home")}>Area de clientes</button>
    </section>
  );
};

export default Index;
