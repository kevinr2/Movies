import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'


export default function Home() {
    return (
        <View style={style.header}>
            <View style={style.title}>
                <Text style={style.headerText}> Hello, what do you want to watch?</Text>
                <TextInput style={style.input} placeholder="Search" />

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        width: '100%',
        height: 250
    },
    title: {
        height: '100%',
        color: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        width: '70%',
        fontSize: 20,
        marginBottom: 20
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: '65%',
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 20
    }
})