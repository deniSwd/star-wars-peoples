import { ComponentProps, FC, FormEvent, useState } from 'react'
import styled from 'styled-components'

interface CustomSelectProps {
  onChange: (e: FormEvent<HTMLSelectElement>)=>void
  value:string
}

export const CustomSelect: FC<CustomSelectProps> = ({ onChange,value}) => {

  return (
    <CustomSelectWrap>
      <Label>Color eye:
        <Select onChange={onChange} value={value}>
          <Option>all</Option>
          <Option>brown</Option>
          <Option>red</Option>
          <Option>blue</Option>
          <Option>hazel</Option>
          <Option>white</Option>
          <Option>yellow</Option>
          <Option>black</Option>
        </Select>
      </Label>
    </CustomSelectWrap>
  )
}

const CustomSelectWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  margin: 55px 0 30px 0;
  @media screen and (max-width: 1200px) {
    margin: 30px  0;
  }
  @media screen and (max-width: 540px) {
    justify-content: center;
  }
`
const Label = styled.label`
  font-size: 20px;
  font-family: Gilroy-Regular, sans-serif;
  color: #212121;
`
const Select = styled.select`
  width: 150px;
  height: 40px;
  font-size: 20px;
  font-family: Nekst-Black, sans-serif;
  color: #212121;
  margin-left: 20px;
  text-align: center;
  border: 2px solid #000000;
  border-radius: 11px;
  background: transparent;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  cursor: pointer;
`
const Option = styled.option `
  font-size: 20px;
  color: #212121;
  background: #ffffff;
`