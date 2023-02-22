import { FC, useState } from 'react'
import styled from 'styled-components'
import { Content, Text } from '../micro/microStyled'
import { CustomSelect } from '../macro/CustomSelect'
import { CharacterCard } from '../macro/CharacterCard'
import { PopUp } from '../macro/PopUp'

const CharactersWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #FFFFFF 30.32%, #F5F5F5 100%);
`
const CardsWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-row-gap: 46px;
  grid-column-gap: 120px;
  margin: 0 auto;
`
const Title = styled.div`
  font-size: 35px;
  line-height: 40px;
  font-family: Nekst-Black, sans-serif;
  color: #000000;
  text-align: center;
  margin-top: 60px;
`

export const Characters: FC = () => {
  const [popUp,setPopUp] =useState(false)
  return (
    <CharactersWrap>
      {popUp && <PopUp closePopUp={()=>setPopUp(false)}/>}
      <Content column>
        <Title>60 Peoples for you to choose your favorite</Title>
        <CustomSelect />
        <CardsWrap>
          <CharacterCard onCharClick={()=>setPopUp(true)}/>
          <CharacterCard onCharClick={()=>setPopUp(true)}/>
          <CharacterCard onCharClick={()=>setPopUp(true)}/>
          <CharacterCard onCharClick={()=>setPopUp(true)}/>
          <CharacterCard onCharClick={()=>setPopUp(true)}/>
          <CharacterCard onCharClick={()=>setPopUp(true)}/>
        </CardsWrap>
      </Content>
    </CharactersWrap>
  )
}