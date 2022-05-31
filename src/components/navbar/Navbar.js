import React from "react";
import { NavLink } from "react-router-dom";
import LogoImg from "../../assets/images/Dark AAG logo IMG_3631_transparent.png";
import { Container } from "../../styles/globalStyle";
import {
  Img,
  MobileIcon,
  MobileIconBars,
  Nav,
  NavItem,
  NavLogo,
  NavMenu,
  NavWrapper,
} from "./Navbar.style";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Container>
        <NavWrapper>
          <NavLogo to="/">
            <Img src={LogoImg} />{" "}
            {/* remeber to make a title here for the img*/}
          </NavLogo>

          <MobileIcon>
            <MobileIconBars onClick={toggle} />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about ">About ATA</NavLink>
            </NavItem>
            <NavItem className="active">
              <NavLink to="/solutions">Our Solutions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/ntm">NTM Home</NavLink>
            </NavItem>
            <NavItem>
              <a href="https://c-coat.com.au/" target="_blank">
                C-Coat
              </a>
            </NavItem>
            <NavItem>
              <a href="https://www.zettex.com/" target="_blank">
                Zettex
              </a>
            </NavItem>
          </NavMenu>
        </NavWrapper>
      </Container>
    </Nav>
  );
};

export default Navbar;
