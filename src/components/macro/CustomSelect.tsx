import { FC, FormEvent, useState } from 'react'
import styled from 'styled-components'

const CustomSelectWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  margin: 55px 0 30px 0;
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

export const CustomSelect: FC = () => {
  const [selectValue, setSelectValue] = useState('all')
  const onSelectChange = (e: FormEvent<HTMLSelectElement>) => setSelectValue(e.currentTarget.value)
  return (
    <CustomSelectWrap>
      <Label>Color eye:
        <Select onChange={onSelectChange} value={selectValue}>
          <Option>all</Option>
          <Option>brown</Option>
          <Option>red</Option>
          <Option>blue</Option>
          <Option>white</Option>
        </Select>
      </Label>
    </CustomSelectWrap>
  )
}