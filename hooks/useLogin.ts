import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { logIn } from '../store/slices/loginSlice'

export const useLogin = () => {
  const dispatch = useDispatch()
  const { isLoading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.login,
  )

  const authentication = (username: string, password: string) => {
    dispatch(logIn({ username, password }))
  }

  return {
    isLoading,
    isAuthenticated,
    error,
    authentication,
  }
}
