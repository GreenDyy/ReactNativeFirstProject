import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import IntroScreen from './IntroScreen';

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Intro">
          <Drawer.Screen name="Intro" component={IntroScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }