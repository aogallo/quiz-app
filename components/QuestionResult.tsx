import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ResponseType } from '../store/slices/responseSlice'

const QuestionResult = ({ question, result }: ResponseType) => {
  return (
    <View key={question}>
      <View style={styles.container}>
        <Text style={styles.questionText}>{question}</Text>
        <Ionicons
          name='close-circle-outline'
          size={30}
          color={!result ? 'red' : 'black'}
        />
        <Ionicons
          name='checkmark-circle-outline'
          size={30}
          color={result ? 'green' : 'black'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  questionText: {
    fontSize: 17,
    width: '75%',
    fontFamily: 'baloo-2',
  },
  container: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 5,
  },
})

export default QuestionResult
