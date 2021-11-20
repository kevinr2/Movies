import React from 'react'
import { View, Text } from 'react-native'

export default function Others() {
    return (
        <View style={{ marginHorizontal: 26, height: 100 }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Studio</Text>
                <Text style={{ color: 'white', marginLeft: 18 }}>Universal</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Genre</Text>
                <Text style={{ color: 'white', marginLeft: 20 }}>Action,aventure</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Release</Text>
                <Text style={{ color: 'white', marginLeft: 10 }}>2018</Text>
            </View>
        </View>
    )
}
