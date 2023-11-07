import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../App'

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  const handlePress = () => {
    navigation.navigate('Questions')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Quiz App</Text>
      <Text style={styles.subtitle}>
        When you are ready press the Start Quiz button
      </Text>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text>Start Quiz</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    // color: 'white',
  },
  subtitle: {
    fontSize: 20,
    // color: 'white',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
})

export default WelcomeScreen
