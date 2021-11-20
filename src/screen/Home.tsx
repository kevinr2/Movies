import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Header from '../components/home/Header'
import Body from '../components/movies/Body'



export default function Home() {
    return (
        <View>
            <Header />
            <Body />
        </View>
    )
}

