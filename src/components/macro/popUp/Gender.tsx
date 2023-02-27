import { FC } from 'react'
import maleImg from '../../../assets/images/male.png'
import femaleImg from '../../../assets/images/female.png'
import ufoImg from '../../../assets/images/n-a.png'
import { StrParam, StrParametersWrap } from '../CharacterCard'
import styled from 'styled-components'
import { FlexPosition } from '../../micro/LayoutStyled'

type GenderProps = {
  gender: string
  birthYear: string
}

export const Gender: FC<GenderProps> = ({ gender, birthYear }) => {
  return (
    <GenderBox centerPosition>
      <GenderImage src={gender === 'male'
        ? maleImg : gender === 'female'
          ? femaleImg : ufoImg}
                   alt={'gender'} />
      <StrParametersWrap column
                         positionAbsolute
                         bottom={12}
                         right={12}>
        {gender !== 'n/a' &&
          <StrParam backColor={gender === 'male'
            ? '#73D677' : gender === 'female'
              ? '#C956FF' : '#F5DB13'}>
            {gender}
          </StrParam>}
        {birthYear !== 'unknown' &&
          <StrParam backColor={'#07D6F2'}>{birthYear}</StrParam>}
      </StrParametersWrap>
    </GenderBox>
  )
}

const GenderBox = styled(FlexPosition)`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  width: 364px;
  background: #1F2A63;
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
  border-radius: 8px 0 0 8px;
  padding: 12px;
  @media screen and (max-width: 960px) {
    width: 264px;
  }
  @media screen and (max-width: 540px) {
    padding: 6px;
    width: 160px;
  }
`
const GenderImage = styled.img`
  width: 100%;
  @media screen and (max-width: 540px) {
    margin-bottom: 60px;
  }
`