import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Switch } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styled from 'styled-components/native'
import { ContainerHeader, Title, HeaderText, Input } from '../../themes/Style'
import { useDispatch } from 'react-redux'
import { datos } from '../../redux/slice/sliceSwitch'




export default function Header() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const dispatch = useDispatch();
    dispatch(datos(isEnabled))
    return (
        <ContainerHeader>
            <Switch style={{ position: 'absolute', marginLeft: 300, top: 50 }}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <Title>
                <HeaderText> Hello, what do you want to watch?</HeaderText>
                <Input placeholder="Search" />
                <Icons name="search" size={20} />
            </Title>
        </ContainerHeader>
    )
}

const Icons = styled(Icon)`
position: absolute;
bottom: 48px;
left: 65px;
color: rgba(255, 255, 255, 0.7);
`

