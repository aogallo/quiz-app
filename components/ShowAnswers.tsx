import { Pressable, StyleSheet, Text, View } from 'react-native'

interface ShowAnswersProps {
  answers: string[]
}

const ShowAnswers = ({ answers }: ShowAnswersProps) => {
  return (
    <View style={styles.container}>
      {answers.map((answer: string) => (
        <Pressable style={styles.buttonContainer} key={answer}>
          <Text style={styles.text}>{answer}</Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
    width: 150,
    rowGap: 10,
  },
  text: {},
})
export default ShowAnswers
