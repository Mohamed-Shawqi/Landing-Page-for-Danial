import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? "80%" : "0")};
  max-width: 280px;
  top: 0;
  left: 0;
  z-index: 999;
  overflow-x: hidden;
  transition: 0.4s;
  background-color: #fff;
  box-shadow: 2px 0 10px 0px #888;
`;
export const SidebarIconBox = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 10px;
`;
export const SidebarIcon = styled(MdClose)`
  color: #444;
  cursor: pointer;
  font-size: 1.5rem;
`;
export const SidebarMenu = styled.ul`
  list-style-type: none;
  margin-top: 30px;
  padding: 20px;
  transition: all 0.8s;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

export const SidebarItem = styled.li`
  color: #444;
  cursor: pointer;
  padding: 10px;
  transition: all 0.2s;
  display: flex;
  align-items: center;

  &:hover {
    padding-left: 20px;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-size: 1.3rem;
  }
`;
export const AngleRightIcon = styled(FaAngleRight)`
  margin-left: auto;
`;
export const SidebarLink = styled(LinkR)`
  color: #444;
`;
