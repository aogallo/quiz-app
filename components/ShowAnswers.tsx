import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../constants/Colors'

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
              answered &&
                response === answer && [styles.commonText, styles.text],
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    borderRadius: 10,
    height: 70,
    width: 383,
  },
  successAnswer: {
    backgroundColor: Colors.primary600,
    borderWidth: 1,
    borderColor: Colors.primary600,
  },
  errorAnswer: {
    backgroundColor: Colors.danger,
    borderWidth: 1,
    borderColor: Colors.danger,
  },
  commonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'baloo-2',
  },
  text: {
    color: 'white',
  },
  pressed: {
    opacity: 0.75,
  },
})

export default ShowAnswers
