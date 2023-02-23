import { FC } from 'react'
import styled from 'styled-components'
import { FlexPosition } from '../micro/microStyled'
import littleYoda from '../../assets/images/18720-baby-yoda.gif'

export const Preloader: FC = () => {
  return (
    <PreloaderWrap centerPosition>
      <LittleYoda src={littleYoda} alt={'littleYoda'}/>
    </PreloaderWrap>
  )
}

const PreloaderWrap = styled(FlexPosition)`
  width: 100%;
  height: 100%;
`
const LittleYoda = styled.img `
  width: 25vw;
  height: 25vw;
`