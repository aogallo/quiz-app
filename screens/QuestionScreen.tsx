import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

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

  const getQuestions = async () => {
    try {
      const data = await fetch(
        'https://opentdb.com/api.php?amount=10&difficulty=hard',
      )
      const json = await data.json()
      setQuestions(json)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getQuestions()

    console.log(questions)
  }, [])

  return (
    <View>
      <Text>hola</Text>
    </View>
  )
}

export default QuestionScreen
