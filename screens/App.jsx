import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native'
import { images, icons } from '../constants/manager'
//screens
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import IntroScreen from './IntroScreen';
import ProfileScreen from './ProfileScreen';
import FavoriteScreen from './FavoriteSceen';
import CartScreen from './CartScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabHome() {
  return (
    <Tab.Navigator initialRouteName='TabHome' screenOptions={{ headerShown: false }}>
      <Tab.Screen name="TabHome" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (<Image source={icons.home}
          style={{tintColor: focused ? '#00CC00' : 'gray', }} />),
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? 'green' : 'gray', fontSize: 10 }}>Home</Text>
        )
      }} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
        tabBarIcon: ({ focused }) => (<Image source={icons.heart} style={{tintColor: focused ? '#00CC00' : 'gray', }} />),
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? 'green' : 'gray', fontSize: 10 }}>Favorite</Text>
        )
      }} />
      <Tab.Screen name="Cart" component={CartScreen} options={{
        tabBarIcon: ({ focused }) => (<Image source={icons.cart} style={{ tintColor: focused ? '#00CC00' : 'gray', }} />),
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? 'green' : 'gray', fontSize: 10 }}>Cart</Text>
        )
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ focused }) => (<Image source={icons.profile} style={{tintColor: focused ? '#00CC00' : 'gray', }} />),
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? 'green' : 'gray', fontSize: 10 }}>Profile</Text>
        )
      }} />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={BottomTabHome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
