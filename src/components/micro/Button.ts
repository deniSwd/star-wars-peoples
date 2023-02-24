import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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
  background: ${(props) => props.background};
  cursor: pointer;
  text-decoration: none;
`