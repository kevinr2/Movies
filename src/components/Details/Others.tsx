import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import Genre from './Genre'
import styled from 'styled-components/native'


export default function Others(props: any) {

    const { studio, realese, genres } = props
    return (
        <ViewOthers>
            <Container>
                <Bold>Studio</Bold>
                <TextInfo>{studio}</TextInfo>
            </Container>
            <Container>
                <Bold>Genres</Bold>
                <Container2>
                    <FlatList
                        horizontal
                        data={genres}
                        legacyImplementation={false}
                        keyExtractor={(genres) => String(genres.id)}
                        renderItem={({ item }) => <Genre name={item.name} />}
                        initialNumToRender={5}
                        removeClippedSubviews
                    />
                </Container2>
            </Container>
            <Container >
                <Bold>Release</Bold>
                <TextInfo2 >{realese}</TextInfo2>
            </Container>
        </ViewOthers>
    )
}

const ViewOthers = styled(View)`
height: 70px;
margin: 0 26px;
`

const Container = styled(View)`
display: flex;
flex-direction:row;
`
const Bold = styled(Text)`
font-weight:bold;
`
const TextInfo = styled(Text)`
margin-left:20px;
`
const TextInfo2 = styled(Text)`
margin-left:15px;
`

const Container2 = styled(View)`
display: flex;
flex-direction:row;
margin-left:15px;
`
