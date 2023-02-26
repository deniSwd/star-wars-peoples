import { FC } from 'react'
import styled from 'styled-components'
import { Button } from '../micro/Button'

export const HomeDescription: FC = () => {
  return (
    <DescriptionWrap>
      <TitleText>Find all your favorite character</TitleText>
      <Text>You can find out all the information about your favorite characters</Text>
      <Button to={'/characters'} background={' #FFC107'}>See more...</Button>
    </DescriptionWrap>
  )
}

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 64px;
  width: 640px;
  @media screen and (max-width: 1440px) {
    width: 520px;
  }
  @media screen and (max-width: 1200px) {
    width: 400px;
  }
  @media screen and (max-width: 960px) {
    gap: 20px;
    width: 70%;
    max-height: 340px;
    margin-bottom: 40px;
    align-items: center;
  }
`
const TitleText = styled.div`
  width: 100%;
  font-size: 72px;
  font-family: Nekst-Black, sans-serif;
  color: #FFFFFF;
  line-height: 84px;
  @media screen and (max-width: 1200px) {
    font-size: 64px;
    line-height: 74px;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    font-size: 44px;
    line-height: 54px;
  }
  @media screen and (max-width: 540px) {
    font-size: 34px;
    line-height: 38px;
  }
`
 const Text = styled.div`
  width: 100%;
  font-size: 32px;
  font-family: Gilroy-Regular, sans-serif;
  color: #FFFFFF;
  line-height: 36px;
   @media screen and (max-width: 1200px) {
     font-size: 28px;
     line-height: 32px;
   }
   @media screen and (max-width: 960px) {
     text-align: center;
     font-size: 20px;
     line-height: 24px;
   }
`

