import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const BetweenCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Content = styled(BetweenCenter)`
  width: 80%;
`
export const Logo = styled.div`
  width: 150px;
  height: 90px;
  background-image: url('/src/assets/images/Star-Wars-transparent-logo.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
export const NavBox = styled(BetweenCenter)`
  height: 54px;
  width:25%;
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