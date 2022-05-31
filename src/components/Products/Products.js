import React from "react";
import {
  ImgBox,
  PaperclipIcon,
  PFOptions,
  ProductBox,
  Productbtn,
  ProductContainer,
  ProductImg,
  ProductName,
  ProductsBox,
  ProductsFilter,
  ProductsFilterBox,
  ProductsState,
} from "./Products.style";

import ACI105 from '../../assets/images/acri-105-300x300.png'
import ACI110 from '../../assets/images/acri-110-300x300.png'
import ACI120 from '../../assets/images/acri-120-300x300.png'
import ACI125 from '../../assets/images/acri-125-300x300.png'


const Products = () => {
  return (
    <ProductContainer>
      <ProductsFilterBox>
        <ProductsState>Showing 4 results</ProductsState>
        <ProductsFilter>
          <PFOptions>Sort by popularity</PFOptions>
          <PFOptions selected>Sort by latest</PFOptions>
          <PFOptions>Sort by price: high to low</PFOptions>
          <PFOptions>Sort by price: low to high</PFOptions>
        </ProductsFilter>
      </ProductsFilterBox>

      <ProductsBox>

        <ProductBox>
          <ImgBox>
            <ProductImg src={ACI105}/>
          </ImgBox>
          <ProductName>ACI-105</ProductName>
          <Productbtn>
            <PaperclipIcon/>
            Deatails
          </Productbtn>
        </ProductBox>
        
        <ProductBox>
          <ImgBox>
            <ProductImg src={ACI110}/>
          </ImgBox>
          <ProductName>ACI-110</ProductName>
          <Productbtn>
            <PaperclipIcon/>
            Deatails
          </Productbtn>
        </ProductBox>

        <ProductBox>
          <ImgBox>
            <ProductImg src={ACI120}/>
          </ImgBox>
          <ProductName>ACI-120</ProductName>
          <Productbtn>
            <PaperclipIcon/>
            Deatails
          </Productbtn>
        </ProductBox>

        <ProductBox>
          <ImgBox>
            <ProductImg src={ACI125}/>
          </ImgBox>
          <ProductName>ACI-125</ProductName>
          <Productbtn>
            <PaperclipIcon/>
            Deatails
          </Productbtn>
        </ProductBox>

      </ProductsBox>
    </ProductContainer>
  );
};

export default Products;
