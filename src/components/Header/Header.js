import React from 'react'
import { HeaderContainer, HeaderItem, HeaderLink, HeaderMenu, HeaderTitle } from './Header.style'

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderTitle>
            Flooring & Carpets
        </HeaderTitle>
        <HeaderMenu>
            <HeaderItem>
                <HeaderLink to='/home' Basic>Home</HeaderLink>
            </HeaderItem>
            <HeaderItem>|</HeaderItem>
            <HeaderItem>
                <HeaderLink to='/solutions'>Flooring & Carpets</HeaderLink>
            </HeaderItem>
        </HeaderMenu>
    </HeaderContainer>
  )
}

export default Header
