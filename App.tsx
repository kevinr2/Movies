import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Appearance, useColorScheme } from 'react-native';
import StackMovie from './src/navigations/StackMovies';
import { StatusBar } from 'expo-status-bar';



export default function App() {
  return (

    <NavigationContainer theme={DarkTheme} >
      <StackMovie />
    </NavigationContainer>

  );
}



