import React from 'react'
import { View, Text } from 'react-native'

export default function Description(props: any) {
    const { description } = props
    return (
        <View>
            <View style={{ marginTop: 20, width: 140, height: 40, backgroundColor: 'gray', marginHorizontal: 25, borderRadius: 30 }}>
                <Text style={{ color: 'white', textAlignVertical: 'center', height: '100%', textAlign: 'center', fontWeight: 'bold' }}>WHATCH NOW</Text>
            </View>
            <View style={{ marginTop: 20, marginHorizontal: 25, height: 100 }}>
                <Text style={{ color: 'white', fontSize: 15 }}>{description}</Text>
            </View>
        </View>
    )
}
