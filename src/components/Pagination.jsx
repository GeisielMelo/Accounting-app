import React from "react";
import styled from "styled-components";
import TableRowsIcon from "@mui/icons-material/TableRows";

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  height: 30px;
  background-color: #f5f5fa;
  border-radius: 6px;
  &:focus-within {
    border: 2px solid #6453e4;
  }

  span {
    display: flex;
    align-items: center;
    margin: 0 10px;
  }
  select {
    background: none;
    height: 100%;
    width: 100%;
  }
`;

export const Pagination = ({ pageSize, onChange }) => {
  return (
    <Container>
      <span>
        <TableRowsIcon />
      </span>
      <select value={pageSize} onChange={onChange}>
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </Container>
  );
};
