import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { API_IMAGE } from '../../assets/Api'
import styled from 'styled-components/native'

export default function Actors(props: any) {
    const { name, poster } = props
    return (
        <ViewContent  >
            <ViewPhoto>
                <ImagePhoto source={{ uri: `${API_IMAGE}${poster}` }} />
            </ViewPhoto>
            <TextName >{name}</TextName>
        </ViewContent>
    )
}

const ViewContent = styled(View)`
margin-top:20px;
margin-left: 15px;
margin-right:15px;
width: 70px;
height: 160px ;

`

const ViewPhoto = styled(View)`
width: 70px;
height: 70px;
background-color: white;
borderRadius: 50px ;
`

const ImagePhoto = styled(Image)`
width: 100%;
height: 100%;
borderRadius: 50px;

`
const TextName = styled(Text)`
margin-top: 10px; 
color: black; 
text-align: center;
`