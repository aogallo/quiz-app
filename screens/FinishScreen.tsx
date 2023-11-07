import { Ionicons } from '@expo/vector-icons'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { RootStackParamList } from '../App'
import { Colors } from '../constants/Colors'
import { RootState } from '../store/store'

type FinishScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'FinishQuiz'
>

const FinishScreen = ({ navigation }: FinishScreenProps) => {
  const responses = useSelector((state: RootState) => state.responses.data)
  const handleFinish = () => {
    navigation.navigate('Welcome')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results</Text>
      {responses.map((response) => (
        <View key={response.quetion}>
          <View style={styles.containerIcons}>
            <Text style={styles.questionText}>{response.quetion}</Text>
            <Ionicons
              name='close-circle-outline'
              size={24}
              color={!response.result ? 'red' : 'black'}
            />
            <Ionicons
              name='checkmark-circle-outline'
              size={24}
              color={response.result ? 'green' : 'black'}
            />
          </View>
        </View>
      ))}
      <Text style={styles.title}>Total</Text>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        onPress={handleFinish}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
      >
        <Text>Play again</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
  button: {
    backgroundColor: Colors.secondary,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 15,
  },
  questionText: {
    width: '75%',
  },
  containerIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  pressed: {
    opacity: 0.75,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
})
export default FinishScreen
