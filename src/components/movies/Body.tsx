import React from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import Movie from './Movie'
import { ContainerBody, ContainerText, TextTitle, TextSee, List1, ListTop, ContainerText2 } from '../../themes/Style'


export default function Body({ movie, top }: any) {
    console.log(movie)
    return (
        <ContainerBody>
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
                    renderItem={({ item }) => <Movie title={item.original_title} poster={item.poster_path} id={item.id} voto={item.vote_average} />}
                    initialNumToRender={10}
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
                    renderItem={({ item }) => <Movie title={item.original_title} poster={item.poster_path} id={item.id} voto={item.vote_average} />}
                    initialNumToRender={3}
                    removeClippedSubviews={true}
                    getItemLayout={(data, index) => (
                        { length: 10, offset: 10, index }
                    )}
                />
            </ListTop>
        </ContainerBody >
    )
}

