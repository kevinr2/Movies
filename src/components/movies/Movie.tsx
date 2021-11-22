import React from 'react'
import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { API_IMAGE } from '../../assets/Api'

export default function Movie(props: any) {
    const { poster, title, id } = props
    const navigation = useNavigation()
    const goMovie = () => {
        navigation.navigate("Details", { id: id })
    }
    return (
        <View style={{ width: 160, height: 260 }}>
            <Pressable onPress={goMovie}>
                <View style={style.movie}>
                    <Image source={{ uri: `${API_IMAGE}${poster}` }} style={{ width: '100%', height: '100%', borderRadius: 20 }} />
                </View>
                <Text style={{ marginLeft: 25, top: 5, color: 'white' }}>{title}</Text>
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