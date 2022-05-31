import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0eb712;
  padding: 70px 0;
`;
export const HeaderTitle = styled.h1`
  font-weight: 200;
  font-size: 5rem;
  color: #fff;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 1px rgb(111 111 111 / 68%);
  text-align: center;

  @media (max-width:992px){
      font-size:3.5rem
  }
  @media (max-width:768px){
      font-size:2.5rem
  }
`;
export const HeaderMenu = styled.ul`
  display: flex;
  list-style-type: none;
`;
export const HeaderItem = styled.li`
  padding: 5px;
`;
export const HeaderLink = styled(LinkR)`
  text-decoration: none;
  color: ${({ Basic }) => (Basic ? "purple" : "black")};
  font-weight: 400;
`;
