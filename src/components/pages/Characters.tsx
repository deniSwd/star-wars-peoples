import { FC } from 'react'
import styled from 'styled-components'
import { Content } from '../micro/microStyled'

const CharactersWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #FFFFFF 30.32%, #F5F5F5 100%);
`

export const Characters: FC = () => {
  return (
    <CharactersWrap>
      <Content>
        <h1>
          Characters
        </h1>
      </Content>
    </CharactersWrap>
  )
}