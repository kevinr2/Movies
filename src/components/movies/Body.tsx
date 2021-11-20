import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Movie from './Movie'

export default function Body() {
    return (
        <View style={style.bodys}>
            <View style={{ top: 20, padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', }}>RECOMMEND FOR YOU</Text>
                <Text style={{ color: 'white', }}>See all</Text>
            </View>
            <Movie />
        </View>
    )
}

const style = StyleSheet.create({
    bodys: {
        width: '100%',
        height: 600,
        backgroundColor: '#2C3848',
        borderRadius: 20,
    }
})