import styled from "styled-components";
import {FiPaperclip} from 'react-icons/fi'


export const ProductContainer = styled.div`
  grid-area: item2;
  display: flex;
  flex-direction: column;
`;
export const ProductsFilterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width:992px) {
    font-size:.8rem  
  }
`
export const ProductsState = styled.div`
  padding:10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`
export const ProductsFilter = styled.select`
  border: none;
  border-bottom: 1px solid #ddd;
  outline: none;
  padding: 10px;
  font-family: inherit;
  font-size: 1rem;
  color: #444;
`
export const PFOptions = styled.option`
  font-size: 1.1rem;
  padding: 5px;
`
export const ProductsBox = styled.div`
  display: grid;
  grid-template-columns:repeat( auto-fit, minmax(250px, 1fr) );
  grid-gap: 15px;
  justify-items: center;
`
export const ProductBox = styled.div`
  max-width: 250px;
  height: 350px;
  background-color: #0eb712;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const ImgBox = styled.div`
  width: 100%;
`
export const ProductImg = styled.img`
  max-width: 100%;
`
export const ProductName = styled.h3`
  color: #fff;
`
export const Productbtn = styled.button`
  border: none;
  background-color: inherit;
  color: white;
  opacity: 0.5;
  padding: 10px;

  &:hover{
    color:blue
  }
`
export const PaperclipIcon = styled(FiPaperclip)`
  color: inherit;
  margin-right: 5px;
`