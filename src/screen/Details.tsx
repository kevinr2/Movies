import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Actors from '../components/Details/Actors'
import Description from '../components/Details/Description'
import ImageDetails from '../components/Details/ImageDetails'
import Others from '../components/Details/Others'
import Title from '../components/Details/Title'

export default function Details(props) {

    const { navigation } = props
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <Icon name="heart" color='#fff' size={20} style={{ marginRight: 20 }} />,
            headerLeft: () =>
                <Icon
                    name="arrow-left"
                    color='#fff'
                    size={20}
                    style={{ marginLeft: 20 }}
                    onPress={navigation.goBack}
                />
        })
    }, [navigation])
    return (
        <View>
            <ImageDetails />
            <Title />
            <Description />
            <ScrollView horizontal>
                <Actors />
                <Actors />
                <Actors />
                <Actors />
            </ScrollView>
            <Others />
        </View>
    )
}
