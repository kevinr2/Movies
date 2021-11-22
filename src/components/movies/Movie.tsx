import React from 'react'
import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { API_IMAGE } from '../../assets/Api'
import styled from 'styled-components/native'

export default function Movie(props: any) {
    const { poster, title, id } = props
    const navigation = useNavigation()
    const goMovie = () => {
        navigation.navigate("Details", { id: id })
    }
    return (
        <Container >
            <Pressable onPress={goMovie}>
                <Movies >
                    <Poster source={{ uri: `${API_IMAGE}${poster}` }} />
                </Movies>
                <Titles>{title}</Titles>
            </Pressable>
        </Container>

    )
}

const Container = styled(View)`
width: 160px;
height: 260px;
`
const Movies = styled(View)`
width: 130px;
height: 170px;
background-color: gray;
margin-top: 15px;
border-radius: 30px;
margin-left: 20px;
`
const Poster = styled(Image)`
width: 100%;
height: 100%;
border-radius: 20px;
`

const Titles = styled(Text)`
margin-left: 25px;
top: 5px;
color: white;
`

