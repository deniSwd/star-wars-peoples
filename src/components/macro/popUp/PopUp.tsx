import { FC } from 'react'
import styled from 'styled-components'
import { CharacterType } from '../../../MainTypes'
import { Gender } from './Gender'
import { Info } from './Info'

type PopUpProps = {
  closePopUp: () => void
  char: CharacterType
}

export const PopUp: FC<PopUpProps> = ({ closePopUp, char }) => {
  return (
    <PopUpBack>
      <PopUpWrap>
        <PopUpButton onClick={closePopUp} />
        <Gender birthYear={char.birth_year} gender={char.gender} />
        <Info name={char.name}
              hairColor={char.hair_color}
              eyeColor={char.eye_color}
              skinColor={char.skin_color}
              height={char.height}
              mass={char.mass} />
      </PopUpWrap>
    </PopUpBack>
  )
}

const PopUpBack = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(33, 33, 33, 0.5);
  z-index: 100;
`
const PopUpWrap = styled.div`
  position: relative;
  display: flex;
  width: 800px;
  height: 380px;
  inset: 50%;
  translate: -50% -50%;
  background: linear-gradient(180deg, #17002F 42.19%, #1F2A63 100%);
  border-radius: 16px;
  z-index: 200;
`
const PopUpButton = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  top: -50px;
  right: 0;
  background: transparent;
  cursor: pointer;
  border: none;

  &::after, ::before {
    display: block;
    position: absolute;
    inset: 50%;
    translate: -50% -50%;
    content: '';
    width: 36px;
    height: 10px;
    background: #212121;
    border-radius: 3px;
  }

  &::after {
    transform: rotate(45deg);
  }

  &::before {
    transform: rotate(-45deg);
  }
`