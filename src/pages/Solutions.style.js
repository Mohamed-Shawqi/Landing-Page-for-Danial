import styled from "styled-components";

export const SolutionContainer = styled.div`
  padding: 50px 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 15px;
  grid-template-areas: "item1 item2";

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: "item1" "item2";
  }
`;
