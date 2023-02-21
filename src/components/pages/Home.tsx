import { FC } from 'react'
import styled from 'styled-components'
import { Content } from '../micro/microStyled'

const HomeWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #1F2A63 0%, #17002F 100%);
`

export const Home: FC = () => {
  return (
    <HomeWrap>
      <Content>
        <h1>
          Home Page
        </h1>
      </Content>
    </HomeWrap>
  )
}