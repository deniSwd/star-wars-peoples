import styled from 'styled-components'

interface PositionProps {
  centerPosition?: boolean
  column?: boolean
}

export const FlexPosition = styled.div<PositionProps>`
  display: flex;
  flex-direction: ${(props) => props.column ? 'column' : 'row'};
  justify-content: ${(props) => props.centerPosition ? 'center' : 'space-between'};
  align-items: center;
`
type ContentProps = {
  changeDirection?: boolean
}
export const Content = styled(FlexPosition)<ContentProps>`
  box-sizing: border-box;
  width: 1440px;
  padding: 0 40px;
  @media screen and (max-width: 960px) {
    width: 910px;
    flex-direction: ${(props) => props.changeDirection ? 'column' : 'row'};
  }
`
