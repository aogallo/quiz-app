import { configureStore } from '@reduxjs/toolkit'
import responsesReducer from './slices/responseSlice'
import loginReducer from './slices/loginSlice'

export const store = configureStore({
  reducer: {
    responses: responsesReducer,
    login: loginReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
