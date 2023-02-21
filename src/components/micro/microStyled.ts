import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const BetweenCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Content = styled(BetweenCenter)`
  width: 75%;
`
export const Logo = styled.div`
  width: 150px;
  height: 90px;
  background-image: url('/src/assets/images/Star-Wars-transparent-logo.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
export const YodaBox = styled.img`
  width: 50%;
  max-height: 100%;
`

export const NavBox = styled(BetweenCenter)`
  height: 54px;
  width: 25%;
`
export const NavButton = styled(NavLink)`
  box-sizing: border-box;
  width: auto;
  height: 100%;
  font-family: Gilroy-Regular, sans-serif;
  font-size: 25px;
  line-height: 54px;
  color: #F6F7F9;
  text-align: center;
  text-decoration: none;

  &.active {
    border-bottom: 3px solid #F6F7F9;
  }
`

interface TextProps {
  size: number
  fontFamily: string
  color: string
  lineHeight: number
}

export const Text = styled.div<TextProps>`
  font-size: ${(props) => props.size}px;
  font-family: ${(props) => props.fontFamily}, sans-serif;
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight}px;
`

interface ButtonProps {
  background: string
}

export const Button = styled(NavLink)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 231px;
  height: 66px;
  border: none;
  border-radius: 11px;
  font-size: 23px;
  line-height: 27px;
  font-family: Nekst-Black, sans-serif;
  color: #212121;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  background: ${(props)=>props.background};
  cursor: pointer;
  text-decoration: none;
`
