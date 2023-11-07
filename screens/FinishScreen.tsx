import { Pressable, StyleSheet, Text, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type FinishScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'FinishQuiz'
>

const FinishScreen = ({ navigation }: FinishScreenProps) => {
  const handleFinish = () => {
    navigation.navigate('Welcome')
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={handleFinish}>
        <Text>Play again</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default FinishScreen
