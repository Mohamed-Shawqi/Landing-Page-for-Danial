import React from "react";

import {
  AngleRightIcon,
  SidebarContainer,
  SidebarIcon,
  SidebarIconBox,
  SidebarItem,
  SidebarLink,
  SidebarMenu,
} from "./Sidebar.style";


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarIconBox>
        <SidebarIcon onClick={toggle} />
      </SidebarIconBox>
      <SidebarMenu isOpen={isOpen}>
        <SidebarItem>
          <SidebarLink to="/home">Home</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/about">About ATA</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/solutions" >Our Solutions </SidebarLink>
          <AngleRightIcon />
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/contact">Contact Us</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/ntm">NTM Home</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <a href="https://c-coat.com.au/" target="_blank">
            C-Coat
          </a>
        </SidebarItem>
        <SidebarItem>
          <a href="https://www.zettex.com/" target="_blank">
            Zettex
          </a>
        </SidebarItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
