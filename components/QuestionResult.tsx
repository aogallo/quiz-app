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
          size={25}
          color={!result ? 'red' : 'black'}
        />
        <Ionicons
          name='checkmark-circle-outline'
          size={25}
          color={result ? '#A8DF8E' : 'black'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  questionText: {
    fontSize: 15,
    width: '75%',
    fontFamily: 'baloo-2',
  },
  container: {
    elevation: 2,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    gap: 8,
    marginVertical: 5,
  },
})

export default QuestionResult
