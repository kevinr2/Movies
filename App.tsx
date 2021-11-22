import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Appearance, useColorScheme, View } from 'react-native';
import StackMovie from './src/navigations/StackMovies';
import styled from 'styled-components/native'




export default function App() {
  return (

    <NavigationContainer >
      <StackMovie />
    </NavigationContainer>

  );
}



