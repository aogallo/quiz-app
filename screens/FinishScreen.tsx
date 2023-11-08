import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { RootStackParamList } from '../App'
import QuestionResult from '../components/QuestionResult'
import { Colors } from '../constants/Colors'
import { cleanResponse } from '../store/slices/responseSlice'
import { RootState } from '../store/store'
import { StatusBar } from 'expo-status-bar'

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
    <>
      <StatusBar style='dark' />
      <SafeAreaView style={styles.outerContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Results</Text>
            <Text style={[styles.title]}>Total score: {totalScore}</Text>
          </View>
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
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  outerContainer: { flex: 1 },
  container: {
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
