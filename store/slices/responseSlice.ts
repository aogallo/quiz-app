import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ResponseType {
  quetion: string
  result: boolean
}

interface ResponseSliceType {
  data: ResponseType[]
  totalScore: number
}

const initialState: ResponseSliceType = {
  data: [],
  totalScore: 0,
}

export const responseSlice = createSlice({
  name: 'responses',
  initialState,
  reducers: {
    addResponse: (state, action: PayloadAction<ResponseType>) => {
      console.log(action.payload)
      state.data.push({ ...action.payload })
    },
    incrementScore: (state) => {
      state.totalScore += 10
    },
  },
})

export const { addResponse } = responseSlice.actions
export default responseSlice.reducer
