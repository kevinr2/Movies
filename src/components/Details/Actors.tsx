import React from 'react'
import { View, Text, ScrollView } from 'react-native'

export default function Actors() {
    return (
        <View style={{ marginTop: 20, marginHorizontal: 15, width: 70, height: 160 }} >
            <View style={{ width: 70, height: 70, backgroundColor: 'white', borderRadius: 50 }}></View>
            <Text style={{ marginTop: 10, color: 'white', textAlign: 'center' }}>Jason Momoa</Text>
        </View>
    )
}
