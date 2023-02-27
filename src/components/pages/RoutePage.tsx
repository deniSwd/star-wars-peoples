import { FC } from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router'
import { Home } from './Home'
import { Characters } from './Characters'
import styled from 'styled-components'
import { ErrorPage } from './ErrorPage'

const RoutePageWrap = styled.div`
  height: calc(100% - 100px);
`

export const RoutePage: FC = () => {

  return (
    <RoutePageWrap>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </RoutePageWrap>
  )
}