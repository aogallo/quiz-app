import LoginScreen from '../screens/LoginScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import QuestionScreen from '../screens/QuestionScreen'
import FinishScreen from '../screens/FinishScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { View } from 'react-native'

const Stack = createNativeStackNavigator<RootStackParamList>()

interface NavigatorProps {
  onLayout(): void
}

const Navigator = ({ onLayout }: NavigatorProps) => {
  const isSignedIn = false
  return (
    <View style={{ flex: 1 }} onLayout={onLayout}>
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
            <Stack.Screen
              name='FinishQuiz'
              component={FinishScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stack.Screen name='Login' component={LoginScreen} />
        )}
      </Stack.Navigator>
    </View>
  )
}

export default Navigator
