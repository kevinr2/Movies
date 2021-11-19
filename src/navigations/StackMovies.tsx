import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screen/Home'
import Details from '../screen/Details'

const Stack = createNativeStackNavigator()

export default function StackMovie() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
}
