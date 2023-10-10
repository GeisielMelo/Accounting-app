import React, { useState } from "react";
import styled from "styled-components";
import { FileUpload } from "../../components/FileUpload";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin: 20px 0;
  gap: 20px;

  font-family: ${(props) => props.theme.font.family.one};
  font-size: ${(props) => props.theme.font.size.sm};
  font-weight: ${(props) => props.theme.font.weight.bold};

  @media (max-width: 630px) {
    flex-direction: column;
  }
`;

const Select = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 290px;
  width: 100%;
  @media (max-width: 630px) {
    max-width: 100%;
  }
  select {
    border: 1px solid rgba(212, 213, 216, 255);
    border-radius: 6px;
    height: 35px;
    font-family: ${(props) => props.theme.font.family.two};
  }
`;

const Input = styled.input`
  max-width: 290px;
  width: 100%;
  height: 35px;
  border: 1px solid rgba(212, 213, 216, 255);
  border-radius: 6px;
  padding: 0 5px;
  font-family: ${(props) => props.theme.font.family.two};
  @media (max-width: 630px) {
    max-width: 100%;
  }
`;

const Button = styled.button`
  max-width: 290px;
  width: 100%;
  height: 35px;
  border: 1px solid rgba(212, 213, 216, 255);
  border-radius: 6px;
  cursor: pointer;
  @media (max-width: 630px) {
    max-width: 100%;
  }
`;

const QuebrarArquivo = () => {
  const [clientCode, setClientCode] = useState("");
  const [clientName, setClientName] = useState("");
  const [optionalParam, setOptionalParam] = useState("");
  const [jsonArray, setJsonArray] = useState([]);

  const handleProcessClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Wrapper>
        <Select>
          <label>Nome do Cliente</label>
          <Input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Cliente" />
        </Select>

        <Select>
          <label>Código do Cliente</label>
          <Input type="number" value={clientCode} onChange={(e) => setClientCode(e.target.value)} placeholder="Código" />
        </Select>

        <Select>
          <label>Parâmetro</label>
          <Input type="text" value={optionalParam} onChange={(e) => setOptionalParam(e.target.value)} placeholder="Opcional" />
        </Select>
      </Wrapper>

      <Wrapper>
        <Select>
          <label>Bancos</label>
          <select>
            <option>Selecione o Banco</option>
          </select>
        </Select>

        <Select>
          <label>Plano Contas</label>
          <select>
            <option>Selecione a Conta</option>
          </select>
        </Select>

        <Select>
          <label>Conta cabeça?</label>
          <select>
            <option>Selecione</option>
            <option>Sim</option>
            <option>Não</option>
          </select>
        </Select>
      </Wrapper>

      <Wrapper>
        <FileUpload setJsonArray={setJsonArray} />
        <Button onClick={handleProcessClick}>Processar</Button>
      </Wrapper>
    </>
  );
};

export default QuebrarArquivo;
