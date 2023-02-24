import { FC } from 'react'
import styled from 'styled-components'
import { FlexPosition } from '../micro/microStyled'

type PaginatorProps = {
  page: number
  pageCount: number
  setPage: (arg: number) => void
}

export const Paginator: FC<PaginatorProps> = ({ page, pageCount, setPage }) => {

  return (
    <PaginatorWrap>
      <CustomButton onClick={() => {setPage(page - 1)}}
                    disabled={page <= 1}
                    leftButton>
        {page-1}...
      </CustomButton>
      {page}
      <CustomButton onClick={() => {setPage(page + 1)}}
                    disabled={page >= pageCount}>
        ...{page+1}
      </CustomButton>
    </PaginatorWrap>)
}

const PaginatorWrap = styled(FlexPosition)`
  position: fixed;
  top: 85%;
  left: 50%;
  translate: -50%;
  width: 25%;
  height: 60px;
  font-size: 30px;
  line-height: 60px;
  font-family: Nekst-Black, sans-serif;
  color: #3b405e;
`
type CustomButtonProps = {
  leftButton?: boolean
}
const CustomButton = styled.button<CustomButtonProps>`
  box-sizing: border-box;
  height: 60px;
  width: 180px;
  padding: 0 10px;
  background: url(${props => props.leftButton
          ? '/src/assets/images/r2-d2L.png'
          : '/src/assets/images/r2-d2R.png'}) center;
  background-size: cover;
  font-size: 30px;
  line-height: 60px;
  font-family: Nekst-Black, sans-serif;
  color: #3b405e;
  border-radius: ${props => props.leftButton ? '40% 0 0 40%': '0 40% 40% 0'};
  border: none;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.3);
  text-align: ${props => props.leftButton ? 'end' : 'start'};
  cursor: pointer;
  
  &:disabled {
    opacity: 0.3;
  }
`