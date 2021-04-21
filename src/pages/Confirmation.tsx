import React from 'react'
import {
  StyleSheet, 
  Text,
  SafeAreaView, 
  View 
} from 'react-native'

import Button from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Confirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          😁
        </Text>
        <Text style={styles.title}>
          Prontinho
        </Text>
        <Text style={styles.text}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
        <View style={styles.footer}>
          <Button>
            Começar
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    color: colors.heading,
    textAlign: 'center',
    lineHeight: 38,
    marginTop: 15
  },
  text: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10,
    color: colors.body_dark
  },
  emoji: {
    fontSize: 48
  },
  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 40
  }
})
