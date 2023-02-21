import { FC } from 'react'
import { Header } from '../macro/Header'
import styled from 'styled-components'
import { RoutePage } from './RoutePage'

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
`

export const App: FC = () => {

  return (
    <AppWrap>
      <Header />
      <RoutePage/>
    </AppWrap>
  )
}

