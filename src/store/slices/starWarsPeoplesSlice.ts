import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../store'
import { getAllPeople } from '../../api/peopleApi'
import { CharacterType } from '../../MainTypes'

export type starWarsPeoplesState = {
  results: Array<CharacterType>
  error: string | null
}

const initialState: starWarsPeoplesState = {
  results: [],
  error: null
}

export const starWarsPeoplesSlice = createSlice({
  name: 'starWarsPeoples',
  initialState,
  reducers: {
    setResults: (state, action: PayloadAction< Array<CharacterType>>) => {
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

export const getStarWarsPeoples = (): AppThunk =>
  async (dispatch) => {
    try {
      const data = await getAllPeople()
      dispatch(setResults(data))
    } catch (error: any) {
      //if return error
      dispatch(setError(error.message))
    }
  }

export default starWarsPeoplesSlice.reducer
