import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { RootStackParamList } from '../App'
import RemainingQuestions from '../components/RemainingQuestions'
import ShowAnswers from '../components/ShowAnswers'
import useApi from '../hooks/useApi'
import {
  addResponse,
  cleanResponse,
  incrementScore,
} from '../store/slices/responseSlice'
import { Colors } from '../constants/Colors'
import CustomPressable from '../components/CustomPressable'
import Card from '../components/Card'

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

  const handleFinish = () => {
    navigation.navigate('FinishQuiz')
  }

  return (
    <>
      {isLoading ? (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size={'large'} />
          <Text style={styles.indicatorText}>Loading...</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <RemainingQuestions
            counter={questionCounter + 1}
            total={questions.length}
          />
          <Card>
            <Text style={styles.questionText}>
              {questions[questionCounter].question}
            </Text>
          </Card>
          <ShowAnswers
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
    padding: 20,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorText: {
    fontSize: 25,
  },
})

export default QuestionScreen
