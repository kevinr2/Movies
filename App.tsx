import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackMovie from './src/navigations/StackMovies';


export default function App() {
  return (
    <NavigationContainer>
      <StackMovie />
    </NavigationContainer>
  );
}



