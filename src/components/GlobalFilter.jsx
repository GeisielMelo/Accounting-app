import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Input = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  height: 30px;
  background-color: #f5f5fa;
  border-radius: 6px;
  &:focus-within{
    border: 2px solid #6453e4;
  }

  span {
    display: flex;
    align-items: center;
    margin: 0 10px;
  }
  input {
    background: none;
    height: 100%;
    width: 100%;
  }
`;

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <Input>
      <span>
        <SearchIcon />
      </span>
      <input type="text" value={filter || ""} onChange={(e) => setFilter(e.target.value)} placeholder="Search..." />
    </Input>
  );
};
