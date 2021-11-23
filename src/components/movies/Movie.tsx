import React from 'react'
import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { API_IMAGE } from '../../assets/Api'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { ContainerMovies, Movies, Poster, TitlesMovies } from '../../themes/Style'

export default function Movie(props: any) {
    const { poster, title, id, voto } = props
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
                <View  >
                    <TitlesMovies>{title}</TitlesMovies>
                    {/* <Text style={{ position: 'absolute', left: 134, top: -15, width: 23, height: 20, borderColor: 'gray', borderStyle: 'solid', borderWidth: 1, borderRadius: 20, textAlign: 'center', backgroundColor: 'gray', color: 'white' }}>{voto}</Text> */}
                </View>

            </Pressable>
        </ContainerMovies>

    )
}


