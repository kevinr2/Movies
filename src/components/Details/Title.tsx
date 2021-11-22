import React from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'


export default function Title(props: any) {
    const { title } = props
    return (
        <ViewContainer>
            <Container>
                <Titles>{title}</Titles>
                <K>4K</K>
            </Container>
        </ViewContainer>
    )
}

const ViewContainer = styled(View)`
margin-top: 10px;
display: flex;
`
const Titles = styled(Text)`
color: black;
font-weight: bold;
font-size: 20px;
width: 250px
`
const K = styled(Text)`
color:black;
`
const Container = styled(View)`
margin: 0 25px;
flex-direction: row;
justify-content:space-between;
`