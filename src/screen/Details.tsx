import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Actors from '../components/Details/Actors'
import Description from '../components/Details/Description'
import ImageDetails from '../components/Details/ImageDetails'
import Others from '../components/Details/Others'
import Title from '../components/Details/Title'
import { GetMovieId, GetRepart } from '../assets/Host'

export default function Details(props: any) {

    const { navigation } = props
    const { route } = props
    const { params } = route
    const [movie, setmovie] = useState(Object)
    const [actor, setActor] = useState(Object)
    const [Studio, setStudio] = useState()
    const [genre, setGenre] = useState()
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
    }, [])
    useEffect(() => {
        (async () => {
            try {
                const response = await GetMovieId(params.id)
                const Repart = await GetRepart(params.id)
                setmovie(response)
                const filtered = Repart.cast.filter((item: any) => {
                    return item.known_for_department == "Acting"
                });
                setActor(filtered)
                setStudio(response.production_companies[0].name)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [params.id])
    return (
        <ScrollView>
            <View>
                <ImageDetails image={movie.backdrop_path} />
                <Title title={movie.title} />
                <Description description={movie.overview} />
                <View style={{ height: 160 }}>
                    <FlatList
                        horizontal
                        data={actor}
                        legacyImplementation={false}
                        keyExtractor={(actor) => String(actor.id)}
                        renderItem={({ item }) => <Actors name={item.original_name} poster={item.profile_path} id={item.id} />}
                    />
                </View>

                <Others studio={Studio} realese={movie.release_date} genres={movie.genres} />
            </View>
        </ScrollView>
    )
}
