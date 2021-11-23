import React from 'react'
import { API_IMAGE } from '../../assets/Api'
import { ViewContents, ViewPhoto, ImagePhoto, TextName } from '../../themes/Style'

export default function Actors(props: any) {
    const { name, poster } = props
    return (
        <ViewContents  >
            <ViewPhoto>
                <ImagePhoto source={{ uri: `${API_IMAGE}${poster}` }} />
            </ViewPhoto>
            <TextName >{name}</TextName>
        </ViewContents>
    )
}

