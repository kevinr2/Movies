import React from 'react'
import { View, Text } from 'react-native'
import { TextGenres } from '../../themes/Style'

export default function Genre(props: any) {
    const { name } = props

    return <TextGenres>{`${name}, `}</TextGenres>



}
