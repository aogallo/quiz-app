import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ResponseType {
  question: string
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
      state.data.push({ ...action.payload })
    },
    incrementScore: (state) => {
      state.totalScore += 10
    },
    cleanResponse: (state) => {
      state.data = []
    },
  },
})

export const { addResponse, incrementScore, cleanResponse } =
  responseSlice.actions
export default responseSlice.reducer
