import React from 'react'
import { View, Text, Image } from 'react-native'
import { API_IMAGE } from '../../assets/Api'

export default function ImageDetails(props: any) {
    const { image } = props
    return (
        <View style={{ width: '100%', height: 250, }}>
            <Image source={{ uri: `${API_IMAGE}${image}` }} style={{ width: '100%', height: '100%', }} />
        </View>
    )
}
