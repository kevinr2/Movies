import React from 'react'
import { TextGenres } from '../../themes/Style'

export default function Genre(props: any) {
    const { name } = props

    return <TextGenres>{`${name}, `}</TextGenres>



}
