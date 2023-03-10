import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../store'
import { getAllPeople } from '../../api/peopleApi'
import { CharacterType } from '../../MainTypes'

export type starWarsPeoplesState = {
  results: Array<CharacterType>
  error: string
}

const initialState: starWarsPeoplesState = {
  results: [],
  error: ''
}

export const starWarsPeoplesSlice = createSlice({
  name: 'starWarsPeoples',
  initialState,
  reducers: {
    setResults: (state, action: PayloadAction<Array<CharacterType>>) => {
      state.results = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

export const { setResults, setError } = starWarsPeoplesSlice.actions

export const selectResults = (state: RootState) => state.starWarsPeoples.results
export const selectError = (state: RootState) => state.starWarsPeoples.error
//Получаем информацию о всех персонажах и сохраняем в стейт
export const getStarWarsPeoples = (): AppThunk =>
  async (dispatch) => {
    try {
      const data = await getAllPeople()
      dispatch(setResults(data))
    } catch (error: any) {
      //если вернулась ошибка
      dispatch(setError(error.message))
    }
  }

export default starWarsPeoplesSlice.reducer
