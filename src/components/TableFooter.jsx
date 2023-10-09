import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    background: none;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    input {
      margin-left: 5px;
      width: 50px;
      height: 100%;
    }
  }
`;

export const TableFooter = ({ nextBtn, lastPage, prevBtn, firstPage, nextDisabled, prevDisabled, pageIndex, pageLength, onChange }) => {
  return (
    <Container>
      <button onClick={firstPage} disabled={prevDisabled}>
        <KeyboardDoubleArrowLeftIcon />
      </button>
      <button onClick={prevBtn} disabled={prevDisabled}>
        <KeyboardArrowLeftIcon />
      </button>

      <span>
        {pageIndex} / {pageLength}
        {/* <input type="number" placeholder="Pag" defaultValue={pageIndex + 1} onChange={onChange} /> */}
      </span>

      <button onClick={nextBtn} disabled={nextDisabled}>
        <KeyboardArrowRightIcon />
      </button>
      <button onClick={lastPage} disabled={nextDisabled}>
        <KeyboardDoubleArrowRightIcon />
      </button>
    </Container>
  );
};
