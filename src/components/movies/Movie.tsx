import React from 'react'
import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { API_IMAGE } from '../../assets/Api'

import { ContainerMovies, Movies, Poster, TitlesMovies } from '../../themes/Style'

export default function Movie(props: any) {
    const { poster, title, id } = props
    const navigation = useNavigation()
    const goMovie = () => {
        navigation.navigate("Details", { id: id })
    }
    return (
        <ContainerMovies >
            <Pressable onPress={goMovie}>
                <Movies >
                    <Poster source={{ uri: `${API_IMAGE}${poster}` }} />
                </Movies>
                <TitlesMovies>{title}</TitlesMovies>
            </Pressable>
        </ContainerMovies>

    )
}


