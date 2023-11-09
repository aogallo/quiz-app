import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { RootStackParamList } from '../App'
import AnswersList from '../components/AnswersList'
import Card from '../components/Card'
import CustomPressable from '../components/CustomPressable'
import RemainingQuestions from '../components/RemainingQuestions'
import useApi from '../hooks/useApi'
import {
  addResponse,
  cleanResponse,
  incrementScore,
} from '../store/slices/responseSlice'
import { Colors } from '../constants/Colors'

export interface QuestionType {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
  all_answers: string[]
}

type QuestionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Questions'
>

const QuestionScreen = ({ navigation }: QuestionScreenProps) => {
  const { questions, isLoading } = useApi()
  const [questionCounter, setQuestionCounter] = useState(0)
  const [answered, setAnswered] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cleanResponse())
  }, [])

  const handleNextQuestion = () => {
    if (!answered) {
      Alert.alert('', 'Are your sure to move another question?', [
        {
          text: 'Yes',
          onPress: () => {
            setQuestionCounter(questionCounter + 1)
            setAnswered(false)
            const response = {
              question: questions[questionCounter].question,
              result: false,
            }
            dispatch(addResponse(response))
          },
          style: 'cancel',
        },
        { text: 'No' },
      ])
    } else {
      setQuestionCounter(questionCounter + 1)

      setAnswered(false)
    }
  }

  const handleVerifyQuestion = (result: boolean) => {
    setAnswered(true)
    const response = { question: questions[questionCounter].question, result }
    dispatch(addResponse(response))
    if (result) {
      dispatch(incrementScore())
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <RemainingQuestions
          counter={isLoading ? 0 : questionCounter + 1}
          total={questions.length}
        />
      ),
    })
  }, [questionCounter, isLoading])

  const handleFinish = () => {
    navigation.navigate('FinishQuiz')
  }

  return (
    <>
      <StatusBar style='dark' />
      {isLoading ? (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size={'large'} color={'white'} />
          <Text style={styles.indicatorText}>Loading...</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Card>
            <Text style={styles.questionText}>
              {questions[questionCounter].question}
            </Text>
          </Card>
          <AnswersList
            onVerifyQuestion={handleVerifyQuestion}
            answered={answered}
            correctAnswer={questions[questionCounter].correct_answer}
            answers={questions[questionCounter].all_answers}
          />
          <View style={styles.buttonContainer}>
            {questionCounter + 1 === questions.length ? (
              <CustomPressable text='Finish the Quiz' onPress={handleFinish} />
            ) : (
              <CustomPressable
                text='Next Question'
                onPress={handleNextQuestion}
              />
            )}
          </View>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.primary700,
  },
  questionText: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'baloo-2',
  },
  buttonContainer: {
    marginTop: 40,
    width: '100%',
  },
  indicatorContainer: {
    backgroundColor: Colors.primary700,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorText: {
    fontSize: 25,
    color: 'white',
  },
})

export default QuestionScreen
