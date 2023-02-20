import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type starWarsPeoplesState = {
  results: Array<string>
}

const initialState: starWarsPeoplesState = {
  results: []
}

export const starWarsPeoplesSlice = createSlice({
  name: 'starWarsPeoples',
  initialState,
  reducers: {
    setResults: (state, action: PayloadAction<Array<string>>) => {
      state.results = action.payload
    }
  }
})

export const { setResults } = starWarsPeoplesSlice.actions

export const selectResults = (state: RootState) => state.starWarsPeoples.results

/*const getStarWarsPeoples = (): AppThunk =>
  async (dispatch, getState) => {
    const people: string = getState().myBook.category
    try {
      dispatch(setResults([]))
      const data = await userAPI.getPeople()
    } catch (error: any) {
      //if axios return error
      dispatch(setError(error.message))
    }
  }*/

export default starWarsPeoplesSlice.reducer
