import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background-color: #686764;
  height: 98px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
`;
export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  @media (max-width: 992px) {
    align-items: center;
  }
`;
export const NavLogo = styled(LinkR)`
  width: 150px;
  display: flex;
  align-items: center;
`;
export const Img = styled.img`
  max-width: 100%;
`;
export const MobileIcon = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

  @media (max-width: 992px) {
    display: flex;
  }
`;
export const MobileIconBars = styled(FaBars)`
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;
export const NavMenu = styled.ul`
  display: flex;
  list-style-type: none;

  @media (max-width: 992px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  padding: 0 15px;
  display: flex;
  align-items: center;
  transition: 0.2s all;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: #0eb712;
    color: #fff;
  }
`;
