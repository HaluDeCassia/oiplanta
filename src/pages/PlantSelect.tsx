import React from 'react'
import {
  StyleSheet, 
  Text,
  SafeAreaView, 
  View ,
  FlatList
} from 'react-native'

import EnvironmentButton from '../components/EnvironmentButton'
import Header from '../components/Header'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function PlantSelect() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content} >
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>Você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList 
          data={[1,2,3,4,5,6]}
          renderItem={({ item }) => (
            <EnvironmentButton active>
              { item }
            </EnvironmentButton>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  content: {
    paddingHorizontal: 32
  },
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 20
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fonts.text,
    color: colors.heading,
    lineHeight: 20
  }
})
