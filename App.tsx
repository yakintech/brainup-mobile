import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/home'
import BlogMainScreen from './src/screens/blog'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const App = () => {
  return <>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          //add icon
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color={'#000'} size={26} />
            )
          }}
        />

        <Tab.Screen
          name="Blog"
          component={BlogMainScreen}
          options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="newspaper" color={'#000'} size={26} />
              )
            }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </>
}

export default App