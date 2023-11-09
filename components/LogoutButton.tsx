import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useLogin } from '../hooks/useLogin'

const LogoutButton = () => {
  const { logout } = useLogin()
  const handleLogout = () => {
    logout()
  }

  return (
    <View>
      <MaterialIcons
        onPress={handleLogout}
        name='logout'
        size={24}
        color='black'
      />
    </View>
  )
}
export default LogoutButton
