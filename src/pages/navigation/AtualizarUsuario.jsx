import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  /* box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px auto; */
  @media (max-width: 630px) {
    align-items: center;
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
    gap: 40px;
    @media (max-width: 630px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0px;
    }
    h1 {
      font-family: ${(props) => props.theme.font.family.one};
      font-size: ${(props) => props.theme.font.size.sm};
      min-width: 150px;
    }
    p {
      color: #4e4e4e;
    }
    input {
      width: 100%;
      height: 40px;
      background-color: #f1f1f2;
      border: 1px solid rgba(212, 213, 216, 255);
      border-radius: 6px;
      padding: 0 10px;
      font-family: ${(props) => props.theme.font.family.two};
      &:disabled {
        cursor: not-allowed;
      }
    }
  }

  div {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    button {
      width: 70px;
      height: 30px;
      border: 1px solid rgba(212, 213, 216, 255);
      font-family: ${(props) => props.theme.font.family.two};
      font-size: ${(props) => props.theme.font.size.sm};
      cursor: pointer;
    }
  }
`;

const AtualizarUsuario = () => {
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  return (
    <Container>
      <span>
        <h1>Name</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </span>

      <span>
        <h1>Last name</h1>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </span>

      <span>
        <h1>E-mail</h1>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </span>

      {/* <span>
        <h1>Situação</h1>
        <p>{testVariables.status ? "Ativo" : "Inativo"}</p>
      </span>

      <span>
        <h1>Grupo</h1>
        <p>{testVariables.group ? testVariables.group : "Sem Grupo"}</p>
      </span> */}

      <span>
        <h1>New Password</h1>
        <input type="password" placeholder="Opcional" value={password} onChange={(e) => setPassword(e.target.value)} />
      </span>

      <span>
        <h1>Confirm Password</h1>
        <input
          type="password"
          placeholder="Optional"
          value={repeatPassword}
          disabled={repeatPassword === ""}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
      </span>

      <div>
        <button>Cancel</button>
        <button style={{ backgroundColor: "#1abc9c", color: "#fff" }}>Submit</button>
      </div>
    </Container>
  );
};

export default AtualizarUsuario;
