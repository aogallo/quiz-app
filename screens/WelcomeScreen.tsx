import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../App'
import CustomPressable from '../components/CustomPressable'
import { Colors } from '../constants/Colors'
import { useLogin } from '../hooks/useLogin'

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  const { logout } = useLogin()
  const handlePress = () => {
    navigation.navigate('Questions')
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Text style={styles.title}>Welcome to Quiz App</Text>
      <Text style={styles.subtitle}>
        When you are ready press the Start Quiz button
      </Text>
      <View style={styles.containerButtons}>
        <CustomPressable
          text='Start Quiz'
          onPress={handlePress}
          style={styles.button}
        />
        <CustomPressable text='Log out' onPress={handleLogout} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary700,
  },
  containerButtons: { gap: 10, width: '100%' },
  title: {
    fontSize: 30,
    color: 'white',
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.secondary,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  commonText: {
    color: 'white',
    fontFamily: 'baloo-2',
    fontSize: 25,
    fontWeight: '900',
  },
})

export default WelcomeScreen
