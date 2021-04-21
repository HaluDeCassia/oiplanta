import React from  'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  }
})
