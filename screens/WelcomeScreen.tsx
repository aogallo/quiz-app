import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../App'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  const handlePress = () => {
    navigation.navigate('Questions')
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Text style={styles.title}>Welcome to Quiz App</Text>
      <Text style={styles.subtitle}>
        When you are ready press the Start Quiz button
      </Text>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.commonText}>Start Quiz</Text>
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
    backgroundColor: Colors.primary700,
  },
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
    borderWidth: 1,
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
