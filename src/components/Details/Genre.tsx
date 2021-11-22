import React from 'react'
import { View, Text } from 'react-native'

export default function Genre(props: any) {
    const { name } = props

    return <Text>{`${name}, `}</Text>



}
