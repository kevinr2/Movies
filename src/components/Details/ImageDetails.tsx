import React from 'react'
import { View, Text, Image } from 'react-native'
import { API_IMAGE } from '../../assets/Api'
import styled from 'styled-components/native'

export default function ImageDetails(props: any) {
    const { image } = props
    return (
        <ImageContent >
            <ImagePoster source={{ uri: `${API_IMAGE}${image}` }} />
        </ImageContent>
    )
}

const ImageContent = styled(View)`
width: 100%;
height: 250px;
`
const ImagePoster = styled(Image)`
width: 100%;
height: 100%;
`