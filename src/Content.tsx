import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackMovie from './navigations/StackMovies';
import { ThemeProvider } from 'styled-components/native'
import lightTheme from './themes/Light'
import DarkTheme from './themes/Dark';
import { useSelector } from 'react-redux';
import { getDatos } from './redux/slice/sliceSwitch';


export default function Content() {
    const valor = useSelector(getDatos)
    return (
        <ThemeProvider theme={valor == false ? lightTheme : DarkTheme}>
            <NavigationContainer >
                <StackMovie />
            </NavigationContainer>
        </ThemeProvider>
    )
}
