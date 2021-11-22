import React from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import Movie from './Movie'
import styled from 'styled-components/native'

export default function Body({ movie, top }: any) {

    return (
        <Container>
            <ContainerText>
                <TextTitle>RECOMMEND FOR YOU</TextTitle>
                <TextSee>See all</TextSee>
            </ContainerText>
            <List1 >
                <FlatList
                    horizontal
                    data={movie}
                    legacyImplementation={false}
                    keyExtractor={(movie) => String(movie.id)}
                    renderItem={({ item }) => <Movie title={item.original_title} poster={item.poster_path} id={item.id} />}
                    initialNumToRender={5}
                    removeClippedSubviews={true}
                />
            </List1>
            <ContainerText2>
                <TextTitle>TOP RATED</TextTitle>
                <TextSee>See all</TextSee>
            </ContainerText2>
            <ListTop>
                <FlatList
                    horizontal
                    data={top}
                    legacyImplementation={false}
                    keyExtractor={(top) => String(top.id)}
                    renderItem={({ item }) => <Movie title={item.original_title} poster={item.poster_path} id={item.id} />}
                    initialNumToRender={5}
                />
            </ListTop>
        </Container >
    )
}

const Container = styled(View)`
width: 100%;
height: 600px;
background-color: #2C3848;
border-top-right-radius: 20px;
border-top-left-radius: 20px;
margin-top: -18px;`

const ContainerText = styled(View)`
top: 20px;
padding: 20px;
display: flex;
flex-direction: row ;
justify-content: space-between;
`
const ContainerText2 = styled(View)`
top: 5px;
padding: 20px;
display: flex;
flex-direction: row ;
justify-content: space-between;
`
const TextTitle = styled(Text)`
color: white;
font-weight: bold;
`
const TextSee = styled(Text)`
color: white;
`

const List1 = styled(View)`
height: 240px;
`

const ListTop = styled(View)`
margin-top: -20px;
height: 240px;
`