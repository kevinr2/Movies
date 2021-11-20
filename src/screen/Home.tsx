import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import Header from '../components/home/Header'
import Body from '../components/movies/Body'




export default function Home() {
    return (
        <ScrollView>
            <Header />
            <Body />
            <StatusBar style='light' />
        </ScrollView>

    )
}

