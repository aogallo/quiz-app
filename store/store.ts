import { configureStore } from '@reduxjs/toolkit'
import responsesReducer from './slices/responseSlice'

export const store = configureStore({
  reducer: {
    responses: responsesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
