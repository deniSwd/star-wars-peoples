import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FlexPosition } from './microStyled'

export const NavBox = styled(FlexPosition)`
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