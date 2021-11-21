import React from 'react'
import { View, Text, Image } from 'react-native'

export default function ImageDetails() {
    return (
        <View style={{ width: '100%', height: 250 }}>
            <Image source={require('../../tools/aquaman.jpg')} style={{ width: '100%', height: '100%' }} />
        </View>
    )
}
