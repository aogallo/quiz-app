import { useState } from 'react'
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Colors } from '../constants/Colors'

const LoginScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Quiz App</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          placeholderTextColor={'white'}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry
          placeholderTextColor={'white'}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Text style={styles.input}>Forgot password?</Text>
      <View style={styles.buttonContainer}>
        <Pressable>
          <Text style={styles.buttonText}>LogIn</Text>
        </Pressable>
      </View>
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
  inputContainer: {
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    color: 'white',
    fontFamily: 'baloo-2',
    fontSize: 20,
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
})

export default LoginScreen
