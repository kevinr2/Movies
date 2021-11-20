import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

export default function Movie() {
    return (
        <ScrollView>
            <View style={style.movie}>

            </View>
        </ScrollView>
    )
}


const style = StyleSheet.create({
    movie: {
        width: 120,
        height: 180,
        backgroundColor: 'gray',
        marginTop: 20,
        left: 25,
        borderRadius: 30
    }
})