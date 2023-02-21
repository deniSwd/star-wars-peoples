import { FC } from 'react'
import styled from 'styled-components'
import { FlexPosition } from '../micro/microStyled'

const CharacterCardWrap = styled.div`
  width: 352px;
  height: 136px;
  background: #F0F0F0;
  border-radius: 8px;
  box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.15);
  padding: 10px 24px;
`
const Name = styled.div`
  font-family: Nekst-Black, sans-serif;
  font-size: 18px;
  line-height: 28px;
  color: #212121;
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  letter-spacing: 2px;
`
const NumParametersWrap = styled.div`
  display: flex;
  gap: 12px;
  margin: 12px 0;
`
const NumParameterBox = styled(FlexPosition)`
  font-family: Gilroy-Regular, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #4B4B4B;
`
const NumParam = styled(FlexPosition)`
  box-sizing: border-box;
  font-size: 15px;
  width: 38px;
  height: 38px;
  border: 3px solid #212121;
  border-radius: 50%;
  margin-bottom: 6px;
`
const StrParametersWrap = styled.div`
  display: flex;
  gap: 12px;
`
const StrParam = styled(FlexPosition)`
  width: auto;
  height: 16px;
  padding: 0 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  background: #73D677;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
`

export const CharacterCard: FC = () => {
  return (
    <CharacterCardWrap>
      <Name>Jabba Desilijic Tiure</Name>
      <NumParametersWrap>
        <NumParameterBox column centerPosition>
          <NumParam column centerPosition>45</NumParam>
          <span>height</span>
        </NumParameterBox>
        <NumParameterBox column centerPosition>
          <NumParam column centerPosition>87</NumParam>
          <span>mass</span>
        </NumParameterBox>
      </NumParametersWrap>
      <StrParametersWrap>
        <StrParam column centerPosition>hermaphrodite</StrParam>
        <StrParam column centerPosition>35BBY</StrParam>
      </StrParametersWrap>
    </CharacterCardWrap>
  )
}