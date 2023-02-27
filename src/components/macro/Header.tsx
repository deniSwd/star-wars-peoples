import { FC } from 'react'
import styled from 'styled-components'
import { Content } from '../micro/LayoutStyled'
import { NavBox, NavButton } from '../micro/NavButton'

export const Header: FC = () => {
  return (
    <HeaderWrap>
      <Content>
        <Logo />
        <NavBox>
          <NavButton to={'/'}>Home</NavButton>
          <NavButton to={'/characters'}>Characters</NavButton>
        </NavBox>
      </Content>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95px;
  border-bottom: 5px solid #3b405e;
  background: #1F2A63;
`
export const Logo = styled.div`
  width: 150px;
  height: 90px;
  background-image: url('/src/assets/images/logo.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 960px) {
    width: 100px;
    height: 60px;
  }
`