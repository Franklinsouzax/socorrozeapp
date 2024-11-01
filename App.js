import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
=======
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


>>>>>>> fdaae181d953769bc355bece4dee6ffa49fcc3be
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import Home from './src/screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

<<<<<<< HEAD
=======



>>>>>>> fdaae181d953769bc355bece4dee6ffa49fcc3be
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <StatusBar style="auto" />
      <Tab.Navigator
        initialRouteName='Welcome'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Welcome') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            } else if (route.name === 'Cadastro') {
              iconName = focused ? 'person-add' : 'person-add-outline';
            } else if (route.name === 'Login') {
              iconName = focused ? 'log-in' : 'log-in-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='Home' component={Home} />
=======
      <Tab.Navigator initialRouteName='Welcome'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } 
          else if (route.name === 'Welcome') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          else if (route.name==="Cadastro") {
            iconName = focused ? 'cart' : 'cart-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name='Home' component={Home}/>
>>>>>>> fdaae181d953769bc355bece4dee6ffa49fcc3be
        <Tab.Screen name='Welcome' component={Welcome} />
        <Tab.Screen name='Cadastro' component={Cadastro} />
        <Tab.Screen name='Login' component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
