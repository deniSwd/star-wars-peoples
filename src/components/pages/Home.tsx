import { FC } from 'react'
import styled from 'styled-components'
import { Content, YodaBox } from '../micro/microStyled'
import { HomeDescription } from '../macro/HomeDescription'
import yodaImage from '../../assets/images/BannerComplete.png'

export const Home: FC = () => {
  return (
    <HomeWrap>
      <Content>
        <HomeDescription />
        <YodaBox src={yodaImage} alt={'yoda'}/>
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

