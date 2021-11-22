import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Title(props: any) {
    const { title } = props
    return (
        <View>
            <View style={{ marginTop: 30, marginHorizontal: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, width: 250 }} >{title}</Text>
                <Text style={{ color: 'white' }}>4K</Text>
            </View>
        </View>
    )
}
