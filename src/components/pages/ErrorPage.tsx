import { FC } from 'react'
import { FlexPosition } from '../micro/microStyled'
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
        <ErrorText>404</ErrorText>
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
const ErrorText = styled.div`
  width: 100%;
  font-size: 700px;
  font-family: Nekst-Black, sans-serif;
  color: rgba(255, 255, 255, 0.5);
  line-height: 780px;
  @media screen and (max-width: 1440px) {
    font-size: 600px;
    line-height: 660px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 500px;
    line-height: 540px;
  }
  @media screen and (max-width: 960px) {
    font-size: 280px;
    line-height: 440px;
  }
  @media screen and (max-width: 540px) {
    font-size: 160px;
  }
`
const DeathStar = styled.img`
  position: absolute;
  height: 623px;
  width: auto;
  inset: 50%;
  translate: -50% -50%;
  @media screen and (max-width: 1440px) {
    height: 523px;
  }
  @media screen and (max-width: 1200px) {
    height: 423px;
  }
  @media screen and (max-width: 960px) {
    height: 240px;
  }
  @media screen and (max-width: 540px) {
    height: 140px;
  }
`