import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { RootStackParamList } from '../App'
import RemainingQuestions from '../components/RemainingQuestions'
import ShowAnswers from '../components/ShowAnswers'
import useApi from '../hooks/useApi'

export interface QuestionType {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
  all_answers: string[]
}

interface QuestionAnsweredType {
  quetion: string
  result: boolean
}

type QuestionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Questions'
>

const QuestionScreen = ({ navigation }: QuestionScreenProps) => {
  const { questions, isLoading } = useApi()
  const [questionsAnswered, setQuestionsAnswered] = useState<
    QuestionAnsweredType[]
  >([])
  const [questionCounter, setQuestionCounter] = useState(0)
  const [answered, setAnswered] = useState(false)

  const handleNextQuestion = () => {
    if (!answered) {
      Alert.alert('', 'Are your sure to move to another question?', [
        {
          text: 'Yes',
          onPress: () => {
            setQuestionCounter(questionCounter + 1)
            setAnswered(false)
            setQuestionsAnswered([
              ...questionsAnswered,
              { quetion: questions[questionCounter].question, result: false },
            ])
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

  const handleVerifyQuestion = (response: boolean) => {
    setAnswered(true)
    setQuestionsAnswered([
      ...questionsAnswered,
      { quetion: questions[questionCounter].question, result: response },
    ])
  }

  const handleFinish = () => {
    navigation.navigate('FinishQuiz')
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <RemainingQuestions
            counter={questionCounter + 1}
            total={questions.length}
          />
          <Text style={styles.questionText}>
            {questions[questionCounter].question}
          </Text>
          <ShowAnswers
            onVerifyQuestion={handleVerifyQuestion}
            answered={answered}
            correctAnswer={questions[questionCounter].correct_answer}
            answers={questions[questionCounter].all_answers}
          />
          <View style={styles.buttonContainer}>
            {questionCounter + 1 === questions.length ? (
              <Button title='Finish the quiz' onPress={handleFinish} />
            ) : (
              <Button title='Next Question' onPress={handleNextQuestion} />
            )}
          </View>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  questionText: {
    fontSize: 25,
  },
  buttonContainer: {
    marginTop: 40,
  },
})

export default QuestionScreen
