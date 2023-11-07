import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { RootStackParamList } from '../App'
import QuestionResult from '../components/QuestionResult'
import { Colors } from '../constants/Colors'
import { cleanResponse } from '../store/slices/responseSlice'
import { RootState } from '../store/store'

type FinishScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'FinishQuiz'
>

const FinishScreen = ({ navigation }: FinishScreenProps) => {
  const responses = useSelector((state: RootState) => state.responses.data)
  const totalScore = useSelector(
    (state: RootState) => state.responses.totalScore,
  )
  const dispatch = useDispatch()

  const handleFinish = () => {
    dispatch(cleanResponse())
    navigation.navigate('Welcome')
  }

  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Results</Text>
        {responses.map((response) => (
          <QuestionResult
            key={response.question}
            question={response.question}
            result={response.result}
          />
        ))}
        <Text style={[styles.title, styles.totalText]}>
          Total: {totalScore}
        </Text>
        <Pressable
          android_ripple={{ color: '#ccc' }}
          onPress={handleFinish}
          style={({ pressed }) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }
        >
          <Text style={styles.playAgainText}>Play again</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  outerContainer: { flex: 1 },
  container: {
    marginTop: 5,
    padding: 10,
  },
  button: {
    backgroundColor: Colors.secondary,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  pressed: {
    opacity: 0.75,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  },
  totalText: {
    marginTop: 10,
  },
  playAgainText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
})

export default FinishScreen
