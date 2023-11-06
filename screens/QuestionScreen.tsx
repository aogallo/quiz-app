import { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import ShowAnswers from '../components/ShowAnswers'

interface QuestionType {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

const QuestionScreen = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [questionCounter, setQuestionCounter] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const getQuestions = async () => {
    try {
      const data = await fetch(
        'https://opentdb.com/api.php?amount=10&difficulty=hard',
      )
      const json = await data.json()
      setQuestions(json.results)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text>{`${questionCounter + 1}/${questions.length}`}</Text>
          <Text>{questions[questionCounter].question}</Text>
          <Text>{questions[questionCounter].category}</Text>
          <Text>{questions[questionCounter].type}</Text>
          <Text>{questions[questionCounter].correct_answer}</Text>
          <ShowAnswers answers={questions[questionCounter].incorrect_answers} />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})

export default QuestionScreen
