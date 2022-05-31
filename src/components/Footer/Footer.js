import React from "react";
import { Container } from "../../styles/globalStyle";
import Logo from '../../assets/images/Dark AAG logo IMG_3631_transparent.png'
import { FooterBox, FooterContainer, FooterImg, FooterLink, FooterLogoBox, FooterRight, FooterText, FooterTitle, FooterWrapper } from "./Footer.style";
import { ProductItem, ProductLink, ProductMenu } from "../SolutionNav/SolutionNav.style";

const Footer = () => {
  return (
    <FooterContainer>
      <Container footer>
        <FooterWrapper>

          <FooterBox>
            <FooterTitle>100% AUSTRALIAN OWNED</FooterTitle>
            <FooterLogoBox>
                <FooterImg src={Logo}/>
            </FooterLogoBox>
            <FooterText>Advanced Adhesives Australia</FooterText>
          </FooterBox>

          <FooterBox>
            <FooterTitle>FIND A PRODUCT</FooterTitle>
            <ProductMenu dark>
              <ProductItem>
                <ProductLink to="/" dark>Cleaners & Polishers</ProductLink>
              </ProductItem>
              <ProductItem>
                <ProductLink to="/" dark>Acoustics</ProductLink>
              </ProductItem>
              <ProductItem>
                <ProductLink to="/" dark>Composites</ProductLink>
              </ProductItem>
              <ProductItem>
                <ProductLink to="/" dark>Flooring & Carpets</ProductLink>
              </ProductItem>
              <ProductItem>
                <ProductLink to="/" dark>Foam & Upholstery</ProductLink>
              </ProductItem>
              <ProductItem>
                <ProductLink to="/" dark>Automotive</ProductLink>
              </ProductItem>
              <ProductItem>
                <ProductLink to="/" dark>Woodwork and Joinery</ProductLink>
              </ProductItem>
              <ProductItem>
                <ProductLink to="/" dark>Roofing</ProductLink>
              </ProductItem>
            </ProductMenu>
          </FooterBox>

          <FooterBox>
            <FooterTitle>CONTACT US TODAY</FooterTitle>
            <FooterText>Address: Unit 4, 128 Station Rd<br/>
                Seven Hills, NSW 2147<br/>
                AUSTRALIA
            </FooterText>
            <FooterText>Phone : <FooterLink href="tel:+61 2 9674 3005">+61 2 9674 3005</FooterLink></FooterText>
            <FooterText>Email: <FooterLink href="mailto:sales@advancedadhesives.com.au">sales@advancedadhesives.com.au</FooterLink></FooterText>
          </FooterBox>
        </FooterWrapper>
      </Container>
      <FooterRight>
          <FooterText>© Copyright - Advanced Adhesives Group Pty Ltd</FooterText>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
