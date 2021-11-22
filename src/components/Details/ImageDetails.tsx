import React from 'react'
import { View, Text, Image } from 'react-native'
import { API_IMAGE } from '../../assets/Api'
import { ImageContent, ImagePoster } from '../../themes/Style'

export default function ImageDetails(props: any) {
    const { image } = props
    return (
        <ImageContent >
            <ImagePoster source={{ uri: `${API_IMAGE}${image}` }} />
        </ImageContent>
    )
}

