import styled from "styled-components";
import DescriptionIcon from "@mui/icons-material/Description";

const Input = styled.div`
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

export const ArchiveSelection = () => {
  return (
    <Input>
      <span>
        <DescriptionIcon />
      </span>
      <select>
        <option>Select</option>
        <option>Example</option>
        <option>Example</option>
        <option>Example</option>
      </select>
    </Input>
  );
};
