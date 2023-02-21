import { FC } from 'react'
import styled from 'styled-components'
import { Button, Text } from '../micro/microStyled'

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 64px;
  width: 40%;
`

export const HomeDescription: FC = () => {
  return (
    <DescriptionWrap>
      <Text size={72}
            fontFamily={'Nekst-Black'}
            color={'#FFFFFF'}
            lineHeight={84}>Find all your favorite character</Text>
      <Text size={32}
            fontFamily={'Gilroy-Regular'}
            color={'#FFFFFF'}
            lineHeight={37}>You can find out all the information about your favorite characters</Text>
      <Button to={'/characters'} background={' #FFC107'}>See more...</Button>
    </DescriptionWrap>
  )
}