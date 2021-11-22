import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Genre from './Genre'
import { ViewO, Container2, ContainerO, Bold, TextInfo, TextInfo2 } from '../../themes/Style'

export default function Others(props: any) {

    const { studio, realese, genres } = props
    return (
        <ViewO>
            <ContainerO>
                <Bold>Studio</Bold>
                <TextInfo>{studio}</TextInfo>
            </ContainerO>
            <ContainerO>
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
            </ContainerO>
            <ContainerO >
                <Bold>Release</Bold>
                <TextInfo2 >{realese}</TextInfo2>
            </ContainerO>
        </ViewO>
    )
}


