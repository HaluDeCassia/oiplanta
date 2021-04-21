import React from 'react'
import { Dimensions, Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import watering from '../assets/watering.png'
import { useNavigation } from '@react-navigation/native'

export function Welcome() {
  const navigation = useNavigation()

  const handleStart = () => {
    navigation.navigate('UserIdentification')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'} 
          suas plantas de {'\n'} 
          forma fácil
        </Text>

        <Image 
          style={styles.image} 
          resizeMode='contain'
          source={watering} 
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Entypo 
            name="chevron-thin-right" 
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 38
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 17,
    color: colors.heading,
    lineHeight: 25,
    fontFamily: fonts.text
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    minHeight: 56,
    minWidth: 56,
    paddingHorizontal: 10
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 16
  },
})
