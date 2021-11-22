import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import { GetMovies, GetTop } from '../assets/Host'
import Header from '../components/home/Header'
import Body from '../components/movies/Body'
import styled from 'styled-components/native'



export default function Home() {

    const [movies, setMovies] = useState(Object)
    const [top, setTop] = useState(Object)
    useEffect(() => {
        (async () => {
            try {
                const response = await GetMovies()
                const Top = await GetTop()
                setMovies(response)
                setTop(Top)
            } catch (error) {
                console.log(error)
            }
        })()

    }, [])
    return (

        <ScrollView>
            <Container>
                <Header />
                <Body movie={movies.results} top={top.results} />
                <StatusBar style='light' />
            </Container>
        </ScrollView>

    )
}

const Container = styled(View)`
background-color: gray;
`
