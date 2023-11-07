import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface ShowAnswersProps {
  answers: string[]
  correctAnswer: string
  answered: boolean
  onVerifyQuestion(response: boolean): void
}

const ShowAnswers = ({
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
        <Pressable
          disabled={answered}
          style={({ pressed }) =>
            pressed
              ? [styles.buttonContainer, styles.pressed]
              : [
                  styles.buttonContainer,
                  answered
                    ? response === answer
                      ? correctAnswer === answer
                        ? styles.successAnswer
                        : styles.errorAnswer
                      : styles.buttonContainer
                    : styles.buttonContainer,
                  ,
                ]
          }
          key={answer}
          onPress={() => handlePress(answer)}
        >
          <Text
            style={[
              styles.commonText,
              answered && response === answer && styles.text,
            ]}
          >
            {answer}
          </Text>
        </Pressable>
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
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 350,
  },
  successAnswer: {
    backgroundColor: '#47B225',
    borderWidth: 1,
    borderColor: '#47B225',
  },
  errorAnswer: {
    backgroundColor: '#C1292E',
    borderWidth: 1,
    borderColor: '#C1292E',
  },
  commonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
  },
  pressed: {
    opacity: 0.75,
  },
})

export default ShowAnswers
