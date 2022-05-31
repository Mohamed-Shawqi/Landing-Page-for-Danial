import React from "react";
import {
  NavHeader,
  ProductItem,
  ProductLink,
  ProductMenu,
  SolutionNavContainer,
} from "./SolutionNav.style";

const SolutionNav = () => {
  return (
    <SolutionNavContainer>
      <NavHeader>Product Categories</NavHeader>
      <ProductMenu>
        <ProductItem>
          <ProductLink to="/">Cleaners & Polishers</ProductLink>
        </ProductItem>
        <ProductItem>
          <ProductLink to="/">Acoustics</ProductLink>
        </ProductItem>
        <ProductItem>
          <ProductLink to="/">Composites</ProductLink>
        </ProductItem>
        <ProductItem>
          <ProductLink to="/">Flooring & Carpets</ProductLink>
        </ProductItem>
        <ProductItem>
          <ProductLink to="/">Foam & Upholstery</ProductLink>
        </ProductItem>
        <ProductItem>
          <ProductLink to="/">Automotive</ProductLink>
        </ProductItem>
        <ProductItem>
          <ProductLink to="/">Woodwork and Joinery</ProductLink>
        </ProductItem>
        <ProductItem>
          <ProductLink to="/">Roofing</ProductLink>
        </ProductItem>
      </ProductMenu>
    </SolutionNavContainer>
  );
};

export default SolutionNav;
