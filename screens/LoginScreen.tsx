import { useState } from 'react'
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import CustomTextInput from '../components/CustomTextInput'
import { Colors } from '../constants/Colors'
import { useLogin } from '../hooks/useLogin'

const LoginScreen = () => {
  const { isLoading, error, authentication, clean } = useLogin()
  const [inputErrors, setInputErrors] = useState({ username: '', password: '' })
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    clean()
    setInputErrors({ username: '', password: '' })
    if (username.trim() === '') {
      setInputErrors((prevState) => {
        return { ...prevState, username: 'The username is required.' }
      })
      return
    }

    if (password.trim() === '') {
      setInputErrors((prevState) => {
        return { ...prevState, password: 'The password is required.' }
      })
      return
    }

    setInputErrors({ username: '', password: '' })
    authentication(username, password)
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Quiz App</Text>
      </View>
      <CustomTextInput
        value={username}
        onChangeText={setUsername}
        placeholder='Username'
        error={inputErrors.username}
      />

      <CustomTextInput
        value={password}
        onChangeText={setPassword}
        placeholder='Password'
        error={inputErrors.password}
        secureTextEntry
      />

      <View>
        <Text style={styles.errorText}>{error}</Text>
      </View>
      <Text style={[styles.input, styles.forgotText]}>Forgot password?</Text>
      <Text style={styles.input}>Help</Text>
      <Pressable
        onPress={handleLogin}
        style={({ pressed }) => [
          styles.buttonContainer,
          pressed ? { opacity: 0.75 } : {},
        ]}
      >
        {isLoading ? (
          <ActivityIndicator size={'small'} />
        ) : (
          <Text style={styles.buttonText}>LogIn</Text>
        )}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary700,
    padding: 10,
    gap: 10,
  },
  buttonContainer: {
    backgroundColor: Colors.secondary,
    width: '100%',
    borderRadius: 10,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'baloo-2',
  },
  logoContainer: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  logoText: {
    fontSize: 20,
  },
  forgotText: {
    marginTop: 10,
  },
  errorText: {
    color: Colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    color: 'white',
    fontFamily: 'baloo-2',
    fontSize: 20,
  },
})

export default LoginScreen
