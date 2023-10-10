import React, { useRef, useState } from "react";
import styled from "styled-components";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const Input = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  width: 100%;
  height: 35px;
  background-color: #f5f5fa;
  border-radius: 6px;
  cursor: pointer;
  &:focus-within {
    border: 2px solid #6453e4;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    margin: 0 10px;
  }
  select {
    background: none;
    height: 100%;
    width: 100%;
  }
`;

const processJsonFile = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject("Nenhum arquivo fornecido");
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const content = JSON.parse(e.target.result);
        resolve(content);
      } catch (error) {
        reject("Erro ao analisar o JSON");
      }
    };

    reader.readAsText(file);
  });
};

export const FileUpload = ({ setJsonArray }) => {
  const [file, setFile] = useState(null);
  const fileRef = useRef();

  const handleChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    try {
      const content = await processJsonFile(selectedFile);
      setJsonArray(content);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Input onClick={() => fileRef.current.click()}>
      <span>
        <p><DriveFolderUploadIcon /></p>
        <p>{file ? file.name : "Selecione um arquivo."}</p>
      </span>
      <input type="file" ref={fileRef} onChange={handleChange} accept=".json" style={{ display: "none" }} />
    </Input>
  );
};
