import styled from 'styled-components'

interface PositionProps {
  centerPosition?: boolean
  column?:boolean
}

export const FlexPosition = styled.div<PositionProps>`
  display: flex;
  flex-direction: ${(props) => props.column ? 'column' : 'row'};
  justify-content: ${(props) => props.centerPosition ? 'center' : 'space-between'};
  align-items: center;
`

export const Content = styled(FlexPosition)`
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