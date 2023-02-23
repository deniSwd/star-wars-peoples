import { FC, FormEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Content } from '../micro/microStyled'
import { CustomSelect } from '../macro/CustomSelect'
import { CharacterCard } from '../macro/CharacterCard'
import { PopUp } from '../macro/PopUp'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getStarWarsPeoples, selectResults } from '../../store/slices/starWarsPeoplesSlice'
import { CharacterType } from '../../MainTypes'

export const Characters: FC = () => {
  const dispatch = useAppDispatch()
  const result = useAppSelector(selectResults)

  const [popUp, setPopUp] = useState(false)
  const [filterValue, setFilterValue] = useState('all')
  const [displayCharacters, setDisplayCharacters] = useState(result)
  const [chooseName,setChooseName] = useState('')

  const charObj = Object.fromEntries(displayCharacters.map(char=>[char.name, char]))

  const onSelectChange = (e: FormEvent<HTMLSelectElement>) => setFilterValue(e.currentTarget.value)
  const onCharCardClick = (name: string) => {
    setChooseName(name)
    setPopUp(true)
  }

  useEffect(() => {
    dispatch(getStarWarsPeoples())
    if (filterValue === 'all') {
      setDisplayCharacters(result)
    } else {
      setDisplayCharacters(result.filter(char => char.eye_color === filterValue))
    }
  }, [filterValue])

  console.log(result)
  console.log(displayCharacters)
  return (
    <CharactersWrap>
      {popUp && <PopUp char={charObj[chooseName]}
        closePopUp={() => setPopUp(false)} />}
      <Content column>
        <Title>{result.length} Peoples for you to choose your favorite</Title>
        <CustomSelect onChange={onSelectChange} value={filterValue} />
        <CardsWrap>
          {displayCharacters.map(char => <CharacterCard char={char}
                                                        onCharClick={() => onCharCardClick(char.name)} />)}
        </CardsWrap>
      </Content>
    </CharactersWrap>
  )
}

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
  grid-template-columns: repeat(3, 1fr);
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
