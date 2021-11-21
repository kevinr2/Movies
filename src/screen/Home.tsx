import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import { GetMovies } from '../assets/Host'
import Header from '../components/home/Header'
import Body from '../components/movies/Body'

export default function Home() {

    const [movies, setMovies] = useState(Object)
    useEffect(() => {
        (async () => {
            try {
                const response = await GetMovies()
                setMovies(response)
            } catch (error) {

            }
        })()

    }, [])
    return (
        <ScrollView>
            <Header />
            <Body movie={movies.results} />
            <StatusBar style='light' />
        </ScrollView>

    )
}

