import { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

interface CardProps {
  children: ReactNode
}

const Card = ({ children }: CardProps) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 229,
    width: 383,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 15,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})

export default Card
