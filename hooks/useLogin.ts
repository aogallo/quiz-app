import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { cleanError, logIn, logOut } from '../store/slices/loginSlice'

export const useLogin = () => {
  const dispatch = useDispatch()
  const { isLoading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.login,
  )

  const authentication = (username: string, password: string) => {
    dispatch(logIn({ username, password }))
  }

  const clean = () => {
    dispatch(cleanError())
  }

  const logout = () => {
    dispatch(logOut())
  }

  return {
    isLoading,
    isAuthenticated,
    error,
    authentication,
    clean,
    logout,
  }
}
