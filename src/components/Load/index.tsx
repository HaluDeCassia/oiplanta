import React from  'react'
import {
  StyleSheet,
  View
} from 'react-native'
import LottieView from 'lottie-react-native'

import loadAnimation from '../../assets/load.json'

export default function Load() {
  return (
    <View style={styles.container}>
      <LottieView 
        source={loadAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  animation: {
    width: 200,
    height: 200,
    backgroundColor: 'transparent'
  }
})
