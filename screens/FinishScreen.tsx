import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native'
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

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text style={styles.title}>{`Total score: ${totalScore} pts`}</Text>
      ),
    })
  }, [])

  return (
    <>
      <StatusBar style='dark' />
      <ScrollView style={styles.container}>
        {responses.map((response) => (
          <QuestionResult
            key={response.question}
            question={response.question}
            result={response.result}
          />
        ))}
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
    </>
  )
}

const styles = StyleSheet.create({
  outerContainer: { flex: 1 },
  container: {
    backgroundColor: Colors.primary700,
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
    fontFamily: 'baloo-2',
    fontSize: 25,
  },
  totalText: {
    color: Colors.primary700,
  },
  playAgainText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
})

export default FinishScreen
