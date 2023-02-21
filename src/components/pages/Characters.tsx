import { FC } from 'react'
import styled from 'styled-components'
import { Content, Text } from '../micro/microStyled'
import { CustomSelect } from '../macro/CustomSelect'
import { CharacterCard } from '../macro/CharacterCard'

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
      <Content column >
        <Text size={35}
              lineHeight={41}
              fontFamily={'Nekst-Black'}
              color={'#000000'}
              center>
          60 Peoples for you to choose your favorite
        </Text>
        <CustomSelect/>
        <CharacterCard/>
      </Content>
    </CharactersWrap>
  )
}