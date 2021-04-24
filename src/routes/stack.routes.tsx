import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Confirmation } from '../pages/Confirmation'
import { UserIdentification } from '../pages/UserIdentification'
import { Welcome } from '../pages/Welcome'
import { PlantSelect } from '../pages/PlantSelect'

import colors from '../styles/colors'

const stack = createStackNavigator()

const StackRoutes: React.FC = () => (
  <stack.Navigator
    headerMode = 'none'
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >
    <stack.Screen 
      name="Welcome"
      component={Welcome}
    />
    <stack.Screen 
      name="UserIdentification"
      component={UserIdentification}
    />
    <stack.Screen 
      name="Confirmation"
      component={Confirmation}
    />

    <stack.Screen 
      name="PlantSelect"
      component={PlantSelect}
    />
  </stack.Navigator>
)

export default StackRoutes