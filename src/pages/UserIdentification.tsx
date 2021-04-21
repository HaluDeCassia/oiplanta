import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet, 
  Text, 
  TextInput,
  SafeAreaView, 
  View, 
  NativeSyntheticEvent,
  TextInputChangeEventData
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Button from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function UserIdentification() {
  const navigation = useNavigation()

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<NativeSyntheticEvent<TextInputChangeEventData>>()

  const handleBlur = () => {
    setIsFocused(false)
    setIsFilled(!!name)
  }
  const handleFocus = () => setIsFocused(true)
  const handleChange = (value: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setIsFilled(!!value)
    setName(value)
  }

  const handleSubmit = () => {
    navigation.navigate('Confirmation')
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.form}>
            <Text style={styles.emoji}>
              {isFilled ? '😄' : '😀'}
            </Text>
            <Text style={styles.title}>
              Como podemos {'\n'} 
              chamar você?
            </Text>
            <TextInput 
              placeholder="Digite um nome" 
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green }
              ]}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
            />
            <View style={styles.footer}>
              <Button onPress={handleSubmit}>
                Confirmar
              </Button>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontFamily: fonts.text
  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 54
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 24
  },
  emoji: {
    fontSize: 44
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20
  }
})
