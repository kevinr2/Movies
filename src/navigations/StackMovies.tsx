import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screen/Home'
import Details from '../screen/Details'

const Stack = createNativeStackNavigator()

export default function StackMovie() {
    return (
        <Stack.Navigator initialRouteName='Home' >
            <Stack.Screen name="Details" component={Details} options={{
                title: '',
                headerTransparent: true
            }} />
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}
