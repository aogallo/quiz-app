import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import LoginScreen from './screens/LoginScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import QuestionScreen from './screens/QuestionScreen'

export type RootStackParamList = {
  Login: undefined
  Welcome: undefined
  Questions: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  const isSignedIn = true
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name='Welcome'
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Questions'
              component={QuestionScreen}
              options={{}}
            />
          </>
        ) : (
          <Stack.Screen name='Login' component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
