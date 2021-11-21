import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Movie from './Movie'

export default function Body({ movie }: any) {
    console.log(movie)
    return (
        <View style={style.bodys}>
            <View style={{ top: 20, padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>RECOMMEND FOR YOU</Text>
                <Text style={{ color: 'white', }}>See all</Text>
            </View>
            <ScrollView horizontal>
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </ScrollView>
            <View style={{ padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>TOP RATED</Text>
                <Text style={{ color: 'white' }}>See all</Text>
            </View>
            <ScrollView horizontal>
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </ScrollView>
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