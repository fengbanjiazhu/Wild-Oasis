import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <StyledApp>
        <Heading type="h1">The Wild Oasis</Heading>
        <Heading type="h2">Check in and out</Heading>
        <Button
          onClick={() => {
            console.log("checked in");
          }}
        >
          Check in
        </Button>
        <Button
          onClick={() => {
            console.log("checked out");
          }}
        >
          Check out
        </Button>
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guest"></Input>
      </StyledApp>
    </>
  );
}

export default App;
