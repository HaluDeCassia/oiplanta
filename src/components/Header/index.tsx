import React from  'react'
import { SafeAreaView } from 'react-native'
import { 
  Image,
  StyleSheet,
  View, 
  Text, 
  TouchableOpacity, 
  TouchableOpacityProps 
} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

import avatar from '../../assets/avatar.png'

interface HeaderProps extends TouchableOpacityProps {
  children: React.ReactNode
}

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá, </Text>
        <Text style={styles.userName}>Halú</Text>
      </View>
      <Image style={styles.avatar} source={avatar} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 32,
    marginTop: getStatusBarHeight()
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: colors.blue
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  }
})
