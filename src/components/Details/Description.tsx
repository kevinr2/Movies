import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ViewButon, TextButton, Descriptions, TextD } from '../../themes/Style'

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


