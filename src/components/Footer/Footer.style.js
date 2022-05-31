import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #555;
    
`
export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 0;

    @media (max-width:768px){
        flex-direction: column;
    }
` 
export const FooterBox = styled.div`
    justify-self: flex-start;
    width: 30%;

    @media (max-width:992px) {
        padding: 20px 0;
    }
    @media (max-width:768px) {
        width: auto;
    }
`
export const FooterTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 500;
    color: #0eb712;
    padding-bottom: 25px;
    margin-bottom: 40px;
    border-bottom: 1px solid #eee;
`
export const FooterLogoBox = styled.div`
    width: 180px;
`
export const FooterImg = styled.img`
    max-width: 100%;
`
export const FooterText = styled.p`
    color:#eee;
    padding:20px 0;
`
export const FooterLink = styled.a`
    color: inherit;
    text-decoration: underline;
`
export const FooterRight = styled.div`
    background-color: black;
    display: flex;
    align-items:center;
    justify-content: center;
`
