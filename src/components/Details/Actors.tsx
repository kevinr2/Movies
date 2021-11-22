import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { API_IMAGE } from '../../assets/Api'

export default function Actors(props: any) {
    const { name, poster } = props
    return (
        <View style={{ marginTop: 20, marginHorizontal: 15, width: 70, height: 160 }} >
            <View style={{ width: 70, height: 70, backgroundColor: 'white', borderRadius: 50 }}>
                <Image source={{ uri: `${API_IMAGE}${poster}` }} style={{ width: '100%', height: '100%', borderRadius: 50 }} />
            </View>
            <Text style={{ marginTop: 10, color: 'white', textAlign: 'center' }}>{name}</Text>
        </View>
    )
}
