import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import LoginScreen from './screens/LoginScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import QuestionScreen from './screens/QuestionScreen'
import FinishScreen from './screens/FinishScreen'
import { Provider } from 'react-redux'
import { store } from './store/store'

export type RootStackParamList = {
  Login: undefined
  Welcome: undefined
  Questions: undefined
  FinishQuiz: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  const isSignedIn = true
  return (
    <Provider store={store}>
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
              <Stack.Screen name='FinishQuiz' component={FinishScreen} />
            </>
          ) : (
            <Stack.Screen name='Login' component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
