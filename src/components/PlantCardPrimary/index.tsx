import React from  'react'
import {
  StyleSheet,
  Text
} from 'react-native'
import { SvgFromUri } from 'react-native-svg'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

import avatar from '../../assets/avatar.png'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

interface PlantCardPrimaryProps extends RectButtonProps {
  data: {
    name: string
    photo: string
  }
}

export default function PlantCardPrimary({ data, ...rest}: PlantCardPrimaryProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri 
        uri={data.photo}
        height={90}
      />
      <Text style={styles.text}>
        { data.name }
      </Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10
  },
  text: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 15
  }
})
