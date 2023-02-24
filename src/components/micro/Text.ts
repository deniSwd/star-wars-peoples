import styled from 'styled-components'

interface TextProps {
  size: number
  fontFamily: string
  color: string
  lineHeight: number
  center?: boolean
}
export const Text = styled.div<TextProps>`
  width: 100%;
  font-size: ${(props) => props.size}px;
  font-family: ${(props) => props.fontFamily}, sans-serif;
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight}px;
  text-align: ${(props) => props.center ? 'center' : 'start'}
`