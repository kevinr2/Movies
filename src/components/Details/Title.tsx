import React from 'react'
import { View, Text, Image } from 'react-native'
import { K, ViewContainer, ContainerTitles, TitlesT } from '../../themes/Style'


export default function Title(props: any) {
    const { title } = props
    return (
        <ViewContainer>
            <ContainerTitles>
                <TitlesT>{title}</TitlesT>
                <K>4K</K>
            </ContainerTitles>
        </ViewContainer>
    )
}

