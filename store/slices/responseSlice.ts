import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ResponseType {
  quetion: string
  result: boolean
}

interface ResponseSliceType {
  responses: ResponseType[]
}

const initialState: ResponseSliceType = {
  responses: [],
}

export const responseSlice = createSlice({
  name: 'responses',
  initialState,
  reducers: {
    addResponse: (state, action: PayloadAction<ResponseType>) => {
      state.responses.push({ ...action.payload })
    },
  },
})

export const { addResponse } = responseSlice.actions
export default responseSlice.reducer
