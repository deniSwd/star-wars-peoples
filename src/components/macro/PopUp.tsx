import { FC } from 'react'
import styled from 'styled-components'
import { FlexPosition } from '../micro/microStyled'
import genderImg from '../../assets/images/n-a.png'
import { Name, NumParam, NumParameterBox, NumParametersWrap, StrParam, StrParametersWrap } from './CharacterCard'
import { CharacterType } from '../../MainTypes'

type PopUpProps = {
  closePopUp: () => void
  char: CharacterType
}

export const PopUp: FC<PopUpProps> = ({ closePopUp,char }) => {
  return (
    <PopUpBack>
      <PopUpWrap>
        <PopUpButton onClick={closePopUp} />
        <GenderBox centerPosition>
          <GenderImage src={genderImg} alt={'gender'} />
          <StrParametersWrap positionAbsolute
                             bottom={12}
                             right={12}>
            <StrParam>{char.gender}</StrParam>
            <StrParam>{char.birth_year}</StrParam>
          </StrParametersWrap>
        </GenderBox>
        <InfoBox>
          <Name fontSize={34} color={' #FDFDFD'}>{char.name}</Name>
          <AdditionalInfo>
            <div>hair color: {char.hair_color}</div>
            <div>eye color: {char.eye_color}</div>
            <div>skin color: {char.skin_color}</div>
          </AdditionalInfo>
          <NumParametersWrap>
            <NumParameterBox column
                             width={82}
                             background={'#FDFDFD'}
                             borderRadius={12}
                             centerPosition>
              <NumParam column centerPosition>{char.height.length < 4 ? char.height : '-'}</NumParam>
              <span>height</span>
            </NumParameterBox>
            <NumParameterBox column
                             width={82}
                             background={'#FDFDFD'}
                             borderRadius={12}
                             centerPosition>
              <NumParam column centerPosition>{char.mass.length < 4 ? char.mass : '-'}</NumParam>
              <span>mass</span>
            </NumParameterBox>
          </NumParametersWrap>
        </InfoBox>
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
const GenderBox = styled(FlexPosition)`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  width: 364px;
  background: #1F2A63;
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
  border-radius: 8px 0 0 8px;
  padding: 12px;
`
const GenderImage = styled.img`
  width: 100%;
`
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;
  width: auto;
  padding: 30px 15px;
`
const AdditionalInfo = styled.div`
  padding: 23px;
  background: #FDFDFD;
  border-radius: 8px;
  font-family: Gilroy-Regular,sans-serif;
  font-size: 16px;
  color: #000000;
  line-height: 18px;
`