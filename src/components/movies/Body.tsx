import React from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import Movie from './Movie'

export default function Body({ movie, top }: any) {

    return (
        <View style={style.bodys}>
            <View style={{ top: 20, padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>RECOMMEND FOR YOU</Text>
                <Text style={{ color: 'white', }}>See all</Text>
            </View>
            <View style={{ height: 240 }}>
                <FlatList
                    horizontal
                    data={movie}
                    legacyImplementation={false}
                    keyExtractor={(movie) => String(movie.id)}
                    renderItem={({ item }) => <Movie title={item.original_title} poster={item.poster_path} id={item.id} />}
                />
            </View>
            <View style={{ padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>TOP RATED</Text>
                <Text style={{ color: 'white' }}>See all</Text>
            </View>
            <FlatList
                horizontal
                data={top}
                legacyImplementation={false}
                keyExtractor={(top) => String(top.id)}
                renderItem={({ item }) => <Movie title={item.original_title} poster={item.poster_path} id={item.id} />}
            />
        </View >
    )
}
const style = StyleSheet.create({
    bodys: {
        width: '100%',
        height: 600,
        backgroundColor: '#2C3848',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    }
})