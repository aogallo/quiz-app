import { StyleSheet, Text, View } from 'react-native'

interface RemainingQuestionsProps {
  counter: number
  total: number
}

const RemainingQuestions = ({ counter, total }: RemainingQuestionsProps) => {
  return (
    <View style={styles.counterContainer}>
      <View style={styles.counterWrap}>
        <Text style={styles.counterText}>{`${counter}/${total}`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  counterContainer: {
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  counterWrap: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  counterText: {
    color: 'white',
  },
})

export default RemainingQuestions
