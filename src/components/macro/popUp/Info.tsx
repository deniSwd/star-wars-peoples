import { FC } from 'react'
import { Name, NumParam, NumParameterBox, NumParametersWrap } from '../CharacterCard'
import styled from 'styled-components'

type InfoProps = {
  name: string
  hairColor: string
  eyeColor: string
  skinColor: string
  height: string
  mass: string
}

export const Info: FC<InfoProps> = ({
                                      name,
                                      height,
                                      hairColor,
                                      eyeColor,
                                      skinColor,
                                      mass
                                    }) => {
  return (
    <InfoBox>
      <Name fontSize={34} color={' #FDFDFD'} inPopUp>{name}</Name>
      <AdditionalInfo>
        <div>hair color: {hairColor}</div>
        <div>eye color: {eyeColor}</div>
        <div>skin color: {skinColor}</div>
      </AdditionalInfo>
      <NumParametersWrap>
        <NumParameterBox inPopUp
                         column
                         width={82}
                         background={'#FDFDFD'}
                         borderRadius={12}
                         centerPosition>
          <NumParam column centerPosition>{height.length < 4 ? height : '-'}</NumParam>
          <span>height</span>
        </NumParameterBox>
        <NumParameterBox inPopUp
                         column
                         width={82}
                         background={'#FDFDFD'}
                         borderRadius={12}
                         centerPosition>
          <NumParam column centerPosition>{mass.length < 4 ? mass : '-'}</NumParam>
          <span>mass</span>
        </NumParameterBox>
      </NumParametersWrap>
    </InfoBox>
  )
}

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;
  width: auto;
  padding: 30px 15px;
  @media screen and (max-width: 540px) {
    padding: 10px;
  }
`
const AdditionalInfo = styled.div`
  padding: 23px;
  background: #FDFDFD;
  border-radius: 8px;
  font-family: Gilroy-Regular, sans-serif;
  font-size: 16px;
  color: #000000;
  line-height: 18px;
  @media screen and (max-width: 540px) {
    padding: 10px;
    font-size: 12px;
  }
`