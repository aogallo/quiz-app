import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../constants/Colors'

interface CustomTextInputProps {
  value: string
  error: string
  onChangeText(value: string): void
  secureTextEntry?: boolean
  placeholder?: string
}

const CustomTextInput = ({
  value,
  error,
  onChangeText,
  placeholder = '',
  secureTextEntry = false,
}: CustomTextInputProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, error ? styles.inputError : {}]}>
        <TextInput
          style={styles.input}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor={'white'}
          cursorColor={'white'}
          autoCapitalize='none'
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      <View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  inputContainer: {
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    color: 'white',
    fontFamily: 'baloo-2',
    fontSize: 20,
  },
  errorText: {
    color: Colors.secondary,
    fontWeight: 'bold',
  },
  inputError: {
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
})

export default CustomTextInput
