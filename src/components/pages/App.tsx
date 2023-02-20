import { FC } from 'react'
import { Header } from '../macro/Header'
import styled from 'styled-components'

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #1F2A63 0%, #17002F 100%);
`

export const App: FC = () => {

  return (
    <AppWrap>
      <Header />
      <h1>
        STAR WARS
      </h1>
    </AppWrap>
  )
}

