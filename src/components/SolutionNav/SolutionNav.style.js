import styled from "styled-components";
import { Link } from "react-router-dom";

export const SolutionNavContainer = styled.nav`
  grid-area: item1;
  padding-bottom: 50px;
`;
export const NavHeader = styled.h3`
  color: #fff;
  text-align: center;
  background-color: #0eb712;
  padding: 10px 0;
  font-weight: 500;
`;
export const ProductMenu = styled.ul`
  padding: ${({dark}) => dark ? '0': ' 20px 0 0 20px'};
`;
export const ProductItem = styled.li`
  position: relative;
  padding: 10px 0 10px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  border-bottom: 1px solid #eee;
  

  &:before {
    position: absolute;
    left: 0;
    content: "";
    width: 8px;
    height: 8px;
    background-color: #ddd;
  }

  :hover {
    padding-left: 30px;
  }
`;
export const ProductLink = styled(Link)`
  color: ${({dark})=>(dark ? "#eee" : "#444")};
`;
