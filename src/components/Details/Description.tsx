import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styled from 'styled-components/native'

export default function Description(props: any) {

    const { description } = props
    return (
        <View>
            <ViewButon>
                <TextButton style={{ textAlignVertical: 'center' }} >WHATCH NOW</TextButton>
            </ViewButon>

            <Descriptions style={{ marginHorizontal: 25, }}>
                <ScrollView>
                    <TextD >{description}</TextD>
                </ScrollView>
            </Descriptions>

        </View>
    )
}


const ViewButon = styled(View)`
margin-top: 20px;
width: 140px;
height: 40px;
background-color: gray;
marginHorizontal: 25px;
borderRadius: 30px;
`

const TextButton = styled(Text)`
color: white;
height: 100%;
text-align: center;
font-weight: bold;
`
const Descriptions = styled(View)`
margin-top: 20px;
height: 110px;
`

const TextD = styled(Text)`
color: black;
font-size: 15px;
`