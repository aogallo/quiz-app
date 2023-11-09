import { Pressable, StyleSheet, Text, TextStyle } from 'react-native'
import { Colors } from '../constants/Colors'

interface CustomPressableProps {
  text: string
  onPress(): void
  style?: TextStyle
}

const CustomPressable = ({ text, onPress, style }: CustomPressableProps) => {
  return (
    <Pressable
      android_ripple={{ color: '#ccc' }}
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        style,
        pressed ? styles.pressed : {},
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.primary800,
    borderRadius: 10,
    paddingVertical: 15,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'baloo-2',
    fontSize: 24,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  },
})

export default CustomPressable
