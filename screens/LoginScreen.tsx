import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const LoginScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View>
      <Text>Hola</Text>
      <View>
        <FontAwesome name='user' size={24} color='black' />
        <TextInput
          // style={styles.input}
          placeholder='username'
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <TextInput
        // style={styles.input}
        placeholder='Password'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default LoginScreen
