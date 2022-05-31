import React from "react";
import { Header, Products, SolutionNav } from "../components";
import { Container } from "../styles/globalStyle";
import { SolutionContainer } from "./Solutions.style";

const Solutions = () => {
  return (
    <>
      <Header />
      <Container>
        <SolutionContainer>
          <SolutionNav />
          <Products />
        </SolutionContainer>
      </Container>
    </>
  );
};

export default Solutions;
