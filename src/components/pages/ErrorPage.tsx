import { FC } from 'react'
import { FlexPosition } from '../micro/microStyled'
import {  Text } from '../micro/Text'
import { Button } from '../micro/Button'
import styled from 'styled-components'
import deathStar from '../../assets/images/DeathStar.png'
import { useAppDispatch } from '../../store/hooks'
import { setError } from '../../store/slices/starWarsPeoplesSlice'

export const ErrorPage: FC = () => {
  const dispatch = useAppDispatch()
  return (
    <ErrorWrap centerPosition column>
      <TextBoxWrap>
        <Text size={700}
              fontFamily={'Nekst-Black'}
              color={'rgba(255, 255, 255, 0.5)'}
              lineHeight={818}>404</Text>
        <DeathStar src={deathStar} alt={'deathStar'} />
      </TextBoxWrap>
      <Button to={'/'} background={'  #73D677'} onClick={() => dispatch(setError(''))}>Return</Button>
    </ErrorWrap>
  )
}

const ErrorWrap = styled(FlexPosition)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #17002F;
`
const TextBoxWrap = styled.div`
  position: relative;
`
const DeathStar = styled.img`
  position: absolute;
  height: 623px;
  width: auto;
  inset: 50%;
  translate: -50% -50%;
`