import React, { useEffect, useState } from 'react'
import {
  StyleSheet, 
  Text,
  SafeAreaView, 
  View ,
  FlatList
} from 'react-native'

import EnvironmentButton from '../components/EnvironmentButton'
import Header from '../components/Header'
import api from '../services/api'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface EnvironmentProps {
  key: string
  title: string
}

export function PlantSelect() {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>()

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get('plants_environments')
      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ])
    }

    fetchEnvironment()
  }, []) 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content} >
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>Você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList 
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton>
              { item.title }
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
