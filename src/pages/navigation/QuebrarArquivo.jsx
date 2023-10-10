import React, { useState } from "react";
import { FileUpload } from "../../components/FileUpload";

const QuebrarArquivo = () => {
  const [jsonArray, setJsonArray] = useState([]);

  return (
    <div>
      <FileUpload setJsonArray={setJsonArray} />
      <button onClick={() => console.log(jsonArray[0])}>Log - Primeiro Item</button>
    </div>
  );
};

export default QuebrarArquivo;
