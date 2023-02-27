import { FC } from 'react'
import { Header } from '../macro/Header'
import styled from 'styled-components'
import { RoutePage } from './RoutePage'
import { useAppSelector } from '../../store/hooks'
import { selectError } from '../../store/slices/starWarsPeoplesSlice'
import { ErrorPage } from './ErrorPage'

export const App: FC = () => {
  const errorMessage = useAppSelector(selectError)
//Если запрос выпонился с ошибкой показываем страницу 404
  if (errorMessage.length > 0) {
    return <ErrorPage />
  }
  return (
    <AppWrap>
      <Header />
      <RoutePage />
    </AppWrap>
  )
}

const AppWrap = styled.div`
  width: 100%;
  height: 100vh;
`



