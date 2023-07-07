import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading type="h1">The Wild Oasis</Heading>
            <div>
              <Heading type="h2">Check in and out</Heading>
              <Button
                onClick={() => {
                  console.log("checked in");
                }}
              >
                Check in
              </Button>
              <Button
                size="small"
                variation="secondary"
                onClick={() => {
                  console.log("checked out");
                }}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guest"></Input>
              <Input type="number" placeholder="Number of guest"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
