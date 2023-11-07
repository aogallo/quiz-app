import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Navigator from './navigation/Navigator'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'

export type RootStackParamList = {
  Login: undefined
  Welcome: undefined
  Questions: undefined
  FinishQuiz: undefined
}

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    'baloo-2': require('./assets/Baloo2.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator onLayout={onLayoutRootView} />
      </NavigationContainer>
    </Provider>
  )
}
