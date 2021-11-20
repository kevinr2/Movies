import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'


export default function Header() {
    return (
        <View style={style.header}>
            <View style={style.title}>
                <Text style={style.headerText}> Hello, what do you want to watch?</Text>
                <TextInput style={style.input} placeholder="Search" />
                <Icon style={style.icon} name="search" size={20} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        width: '100%',
        height: 200
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
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: '65%',
        padding: 2,
        paddingHorizontal: 40,
        borderRadius: 20
    },
    icon: {
        position: 'absolute',
        bottom: 56,
        left: 75,
        color: 'rgba(255, 255, 255, 0.7)'
    }
})
