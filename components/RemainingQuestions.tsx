import { StyleSheet, Text, View } from 'react-native'

interface RemainingQuestionsProps {
  counter: number
  total: number
}

const RemainingQuestions = ({ counter, total }: RemainingQuestionsProps) => {
  return (
    <View style={styles.counterContainer}>
      <View style={styles.counterWrap}>
        <Text
          style={styles.counterText}
        >{`Questions - ${counter}/${total}`}</Text>
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
    padding: 5,
  },
  counterText: {
    fontFamily: 'baloo-2',
    fontSize: 18,
  },
})

export default RemainingQuestions
