import { FC, FormEvent, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Content } from '../micro/microStyled'
import { CustomSelect } from '../macro/CustomSelect'
import { CharacterCard } from '../macro/CharacterCard'
import { PopUp } from '../macro/PopUp'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getStarWarsPeoples, selectResults } from '../../store/slices/starWarsPeoplesSlice'
import { Preloader } from '../macro/Preloader'
import { Paginator } from '../macro/Paginator'

export const Characters: FC = () => {
  const dispatch = useAppDispatch()
  const result = useAppSelector(selectResults)

  useEffect(() => {
    dispatch(getStarWarsPeoples())
  }, [])

  const [popUp, setPopUp] = useState(false)
  const [filterValue, setFilterValue] = useState('all')
  const [chooseName, setChooseName] = useState('')
  const [page, setPage] = useState(1)

  const onSelectChange = (e: FormEvent<HTMLSelectElement>) =>{
    setFilterValue(e.currentTarget.value)
    setPage(1)
  }

  const onCharCardClick = (name: string) => {
    setChooseName(name)
    setPopUp(true)
  }

  const filteredResult = useMemo(() => {
    if (filterValue === 'all') {
      return result
    } else {
      return result.filter(char => char.eye_color === filterValue)
    }
  }, [result, filterValue])

  const charObj = Object.fromEntries(filteredResult.map(char => [char.name, char]))

  const itemsCount = 6
  const pageCount = Math.ceil(filteredResult.length / itemsCount)
  const leftPageItem = (page - 1) * itemsCount
  const rightPageItem = page * itemsCount

  if (result.length === 0) {
    return <Preloader />
  }

  return (
    <CharactersWrap>
      {popUp && <PopUp char={charObj[chooseName]}
                       closePopUp={() => setPopUp(false)} />}
      <Content column>
        <Title>{filteredResult.length} Peoples for you to choose your favorite</Title>
        <CustomSelect onChange={onSelectChange} value={filterValue} />
        <CardsWrap>
          {filteredResult
            .slice(leftPageItem, rightPageItem)
            .map(char => <CharacterCard char={char}
                                        onCharClick={() => onCharCardClick(char.name)} />)}
        </CardsWrap>
        <Paginator page={page} pageCount={pageCount} setPage={setPage} />
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
  grid-column-gap: 100px;
`
const Title = styled.div`
  font-size: 35px;
  line-height: 40px;
  font-family: Nekst-Black, sans-serif;
  color: #000000;
  text-align: center;
  margin-top: 60px;
`
