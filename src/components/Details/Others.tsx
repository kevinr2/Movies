import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import Genre from './Genre'

export default function Others(props: any) {

    const { studio, realese, genres } = props
    return (
        <View style={{ marginHorizontal: 26, height: 70 }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Studio</Text>
                <Text style={{ color: 'white', marginLeft: 20 }}>{studio}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Genres</Text>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 15 }}>
                    <FlatList
                        horizontal
                        data={genres}
                        legacyImplementation={false}
                        keyExtractor={(genres) => String(genres.id)}
                        renderItem={({ item }) => <Genre name={item.name} />}
                    />
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Release</Text>
                <Text style={{ color: 'white', marginLeft: 10 }}>{realese}</Text>
            </View>
        </View>
    )
}
