import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface LoginType {
  isLoading: boolean
  isAuthenticated: boolean
  error: string
}

interface UserType {
  username: string
  password: string
}

const initialState: LoginType = {
  isLoading: false,
  isAuthenticated: false,
  error: '',
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<UserType>) => {
      state.error = ''
      state.isLoading = true
      if (
        action.payload.username !== 'adminUser' ||
        action.payload.password !== '12345678'
      ) {
        state.error = 'Unable to Log in'
      } else {
        state.isAuthenticated = true
        state.error = ''
      }
      state.isLoading = false
    },
    logOut: (state) => {
      state.isAuthenticated = false
    },
    cleanError: (state) => {
      state.error = ''
    },
  },
})

export const { logIn, logOut, cleanError } = loginSlice.actions

export default loginSlice.reducer
