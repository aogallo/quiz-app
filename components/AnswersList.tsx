import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Option from './Option'

interface ShowAnswersProps {
  answers: string[]
  correctAnswer: string
  answered: boolean
  onVerifyQuestion(response: boolean): void
}

const AnswersList = ({
  answers,
  correctAnswer,
  answered,
  onVerifyQuestion,
}: ShowAnswersProps) => {
  const [response, setResponse] = useState('')

  const handlePress = (answer: string) => {
    const response = correctAnswer === answer
    onVerifyQuestion(response)
    setResponse(answer)
  }

  return (
    <View style={styles.container}>
      {answers.map((answer: string) => (
        <Option
          key={answer}
          option={answer}
          answered={answered}
          onPress={handlePress}
          correctAnswer={correctAnswer}
          response={response}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default AnswersList
