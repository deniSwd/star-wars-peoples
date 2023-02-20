import { FC } from 'react'
import styled from 'styled-components'
import { Content, Logo, NavBox, NavButton } from '../micro/microStyled'

const HeaderWrap = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95px;
  border-bottom: 4px solid #3a3e57;
  background: #1F2A63;
`
export const Header: FC = () => {
  return (
    <HeaderWrap>
      <Content>
        <Logo />
        <NavBox>
          <NavButton to={'/'} >Home</NavButton>
          <NavButton to={'/characters'}>Characters</NavButton>
        </NavBox>
      </Content>
    </HeaderWrap>
  )
}