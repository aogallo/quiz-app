import { Pressable, StyleSheet, Text } from 'react-native'
import { Colors } from '../constants/Colors'

interface OptionProps {
  answered: boolean
  onPress(value: string): void
  response: string
  option: string
  correctAnswer: string
}

const Option = ({
  answered,
  correctAnswer,
  onPress,
  option,
  response,
}: OptionProps) => {
  return (
    <Pressable
      disabled={answered}
      style={({ pressed }) =>
        pressed
          ? [styles.buttonContainer, styles.pressed]
          : [
              styles.buttonContainer,
              answered
                ? response === option
                  ? correctAnswer === option
                    ? styles.successAnswer
                    : styles.errorAnswer
                  : styles.buttonContainer
                : styles.buttonContainer,
              ,
            ]
      }
      onPress={() => onPress(option)}
    >
      <Text
        style={[
          styles.commonText,
          answered && response === option && [styles.commonText, styles.text],
        ]}
      >
        {option}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
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

export default Option
