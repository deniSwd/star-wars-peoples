import { FC, FormEvent, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Content } from '../micro/microStyled'
import { CustomSelect } from '../macro/CustomSelect'
import { CharacterCard } from '../macro/CharacterCard'
import { PopUp } from '../macro/popUp/PopUp'
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

  const onSelectChange = (e: FormEvent<HTMLSelectElement>) => {
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
      <Content column changeDirection>
        <Title>{filteredResult.length} Peoples for you to choose your favorite</Title>
        <CustomSelect onChange={onSelectChange} value={filterValue} />
        <CardsWrap>
          {filteredResult
            .slice(leftPageItem, rightPageItem)
            .map((char, i) => <CharacterCard char={char} key={i}
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
  width: 100%;
  height: calc(100vh - 100px);
  background: linear-gradient(180deg, #FFFFFF 30.32%, #F5F5F5 100%);
  @media screen and (max-width: 960px) {
   height: fit-content;
  }
`
const CardsWrap = styled.div`
  width: 100%;
  height: content-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 46px;
  grid-column-gap: 100px;
  @media screen and (max-width: 1200px) {
    grid-column-gap: 46px;
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 16px;
    justify-items: center;
  }
`
const Title = styled.div`
  font-size: 35px;
  line-height: 40px;
  font-family: Nekst-Black, sans-serif;
  color: #000000;
  text-align: center;
  margin-top: 50px;
  
  @media screen and (max-width: 960px) {
    margin-top: 30px;
    font-size: 32px;
    line-height: 36px;
  }
  @media screen and (max-width: 540px) {
    width: 80%;
    margin-top: 20px;
    font-size: 24px;
    line-height: 28px;
  }
`
