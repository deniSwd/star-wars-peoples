import { FC } from 'react'
import styled from 'styled-components'
import { FlexPosition } from '../micro/microStyled'
import { CharacterType } from '../../MainTypes'

type CharacterCardProps = {
  onCharClick: () => void
  char: CharacterType
}

export const CharacterCard: FC<CharacterCardProps> = ({ onCharClick, char }) => {
  return (
    <CharacterCardWrap onClick={onCharClick}>
      <Name fontSize={18} color={' #212121'}>{char.name}</Name>
      <NumParametersWrap>
        <NumParameterBox column centerPosition>
          <NumParam column centerPosition>{char.height.length < 4 ? char.height : '-'}</NumParam>
          <span>height</span>
        </NumParameterBox>
        <NumParameterBox column centerPosition>
          <NumParam column centerPosition>{char.mass.length < 4 ? char.mass : '-'}</NumParam>
          <span>mass</span>
        </NumParameterBox>
      </NumParametersWrap>
      <StrParametersWrap>
        {char.gender !== 'n/a' &&
          <StrParam column centerPosition
                    backColor={char.gender === 'male'
                      ? '#73D677' : char.gender === 'female'
                        ? '#C956FF' : '#F5DB13'}>{char.gender}</StrParam>}
        {char.birth_year !== 'unknown' &&
          <StrParam column centerPosition backColor={'#07D6F2'}>{char.birth_year}</StrParam>}
      </StrParametersWrap>
    </CharacterCardWrap>
  )
}

const CharacterCardWrap = styled.div`
  width: 352px;
  height: 136px;
  background: #F0F0F0;
  border-radius: 8px;
  box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.15);
  padding: 10px 24px;
  cursor: pointer;
`
type NameProps = {
  color: string
  fontSize: number
}
export const Name = styled.div<NameProps>`
  font-family: Nekst-Black, sans-serif;
  font-size: ${props => props.fontSize}px;
  line-height: 28px;
  color: ${props => props.color};
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  letter-spacing: 2px;
`
export const NumParametersWrap = styled.div`
  display: flex;
  gap: 12px;
`
type NumParameterBoxProps = {
  width?: number
  borderRadius?: number
  background?: string
}
export const NumParameterBox = styled(FlexPosition)<NumParameterBoxProps>`
  padding: 12px 0;
  font-family: Gilroy-Regular, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #4B4B4B;
  width: ${props => props.width}px;
  border-radius: ${props => props.borderRadius}px;
  background: ${props => props.background};
`
export const NumParam = styled(FlexPosition)`
  box-sizing: border-box;
  font-size: 15px;
  width: 38px;
  height: 38px;
  border: 3px solid #212121;
  border-radius: 50%;
  margin-bottom: 6px;
`
type StrParametersWrapProps = {
  justify?: 'center' | 'end'
  positionAbsolute?: boolean
  bottom?: number
  right?: number
}

export const StrParametersWrap = styled.div<StrParametersWrapProps>`
  position: ${props => props.positionAbsolute && 'absolute'};
  bottom: ${props => props.bottom}px;
  right: ${props => props.right}px;
  display: flex;
  justify-content: ${props => props.justify};
  gap: 12px;
`

type StrParamProps = {
  backColor: string
}
export const StrParam = styled(FlexPosition)<StrParamProps>`
  width: auto;
  height: 16px;
  padding: 0 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  background: ${props => props.backColor};
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
`
