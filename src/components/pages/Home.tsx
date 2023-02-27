import { FC } from 'react'
import styled from 'styled-components'
import { Content } from '../micro/LayoutStyled'
import { HomeDescription } from '../macro/HomeDescription'
import yodaImage from '../../assets/images/BannerComplete.png'

export const Home: FC = () => {
  return (
    <HomeWrap>
      <Content changeDirection>
        <HomeDescription />
        <YodaBox src={yodaImage} alt={'yoda'} />
      </Content>
    </HomeWrap>
  )
}

const HomeWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #1F2A63 0%, #17002F 100%);
`
export const YodaBox = styled.img`
  width: 720px;
  max-height: 100%;
  @media screen and (max-width: 1440px) {
    width: 600px;
  }
  @media screen and (max-width: 1200px) {
    width: 480px;
  }
  @media screen and (max-width: 960px) {
    width: 340px;
  }
  @media screen and (max-width: 540px) {
    width: 280px
  }
`