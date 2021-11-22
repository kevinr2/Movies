import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styled from 'styled-components/native'



export default function Header() {
    return (
        <Container>
            <Title>
                <HeaderText> Hello, what do you want to watch?</HeaderText>
                <Input placeholder="Search" />
                <Icons name="search" size={20} />
            </Title>
        </Container>
    )
}

const Container = styled(View)`
width: 100%;
height: 200px;
margin-top: -15px;
`
const Title = styled(View)`
height: 100%;
display:flex;
justify-content: center;
align-items: center;
`

const HeaderText = styled(Text)`
color: white;
width: 70%;
font-size: 25px;
font-weight: bold;
margin-bottom: 20px;
`
const Input = styled(TextInput)`
marginLeft: 20px;
background-color: rgba(255, 255, 255, 0.7);
width: 75%;
padding: 2px 40px;
border-radius: 20px;
`
const Icons = styled(Icon)`
position: absolute;
bottom: 48px;
left: 65px;
color: rgba(255, 255, 255, 0.7);
`

