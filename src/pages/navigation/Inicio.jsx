import { styled } from "styled-components";
import ScreenRotationIcon from "@mui/icons-material/ScreenRotation";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 10px; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 40px;
`;

const Subtitle = styled.p`
  font-family: ${(props) => props.theme.font.family.two};
  font-size: ${(props) => props.theme.font.size.sm};
  font-weight: ${(props) => props.theme.font.weight.bold};
  margin: 30px 0;
  max-width: 300px;
  span {
    color: red;
  }
`;

const Inicio = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Accounting-app</Title>
        <Subtitle>Welcome to the management system.</Subtitle>
        <Subtitle>
          For an optimized experience on mobile devices, such as tablets and smartphones, it is advisable to enable automatic rotation mode.
          <br />
          {<ScreenRotationIcon />}
        </Subtitle>
        <Subtitle><span>Important</span>: The information in the tables is fictional and has been generated exclusively for testing purposes.</Subtitle>
      </Container>
    </Wrapper>
  );
};

export default Inicio;
