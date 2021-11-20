import React from 'react'
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Movie() {
    const navigation = useNavigation()
    return (
        <View style={{ width: 160, height: 200 }}>
            <Pressable onPress={() => navigation.navigate("Details")}>
                <View style={style.movie}>
                </View>
                <Text style={{ marginLeft: 25, top: 15, color: 'white' }}>Avengers endgame</Text>
            </Pressable>
        </View>

    )
}

const style = StyleSheet.create({
    movie: {
        width: 130,
        height: 170,
        backgroundColor: 'gray',
        marginTop: 15,
        borderRadius: 30,
        marginLeft: 20
    }
})