import React from 'react'
import { View, Text } from 'react-native'

export default function Description() {
    return (
        <View>
            <View style={{ marginTop: 20, width: 140, height: 40, backgroundColor: 'gray', marginHorizontal: 25, borderRadius: 30 }}>
                <Text style={{ color: 'white', textAlignVertical: 'center', height: '100%', textAlign: 'center', fontWeight: 'bold' }}>WHATCH NOW</Text>
            </View>
            <View style={{ marginTop: 20, marginHorizontal: 25 }}>
                <Text style={{ color: 'white', fontSize: 15 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>
        </View>
    )
}
