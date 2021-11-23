import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import { GetMovies, GetTop } from '../assets/Host'
import Header from '../components/home/Header'
import Body from '../components/movies/Body'
import { ContainerHome } from '../themes/Style'



export default function Home() {

    const [movies, setMovies] = useState(Array)
    const [top, setTop] = useState(Array)
    useEffect(() => {
        (async () => {
            try {
                const response = await GetMovies()
                const Top = await GetTop()
                await LoadTop()
                await LoadMovie()
            } catch (error) {
                console.log(error)
            }
        })()

    }, [])
    const LoadMovie = async () => {
        try {
            const response = await GetMovies();
            const moviesArray = []
            for await (const movies of response.results) {
                moviesArray.push({
                    id: movies.id,
                    original_title: movies.original_title,
                    poster_path: movies.poster_path,
                    vote_average: movies.vote_average
                })
            }
            setMovies([...movies, ...moviesArray])
        } catch (error) {
            console.error(error);
        }
    }
    const LoadTop = async () => {
        try {
            const response = await GetTop();
            const moviesArray = []
            for await (const movies of response.results) {
                moviesArray.push({
                    id: movies.id,
                    original_title: movies.original_title,
                    poster_path: movies.poster_path,
                    vote_average: movies.vote_average
                })
            }
            setTop([...movies, ...moviesArray])
        } catch (error) {
            console.error(error);
        }
    }
    return (

        <ScrollView>
            <ContainerHome>
                <Header />
                <Body movie={movies} top={top} />
                <StatusBar style='light' />
            </ContainerHome>
        </ScrollView>

    )
}


