import { API, API_IMAGE } from "./Api"
import { KEY_API } from "./KeyApi"

export async function GetMovies() {
    try {
        const URL = `${API}discover/movie${KEY_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
        const response = await fetch(URL)
        const result = await response.json()
        return result
    } catch (error) {
        throw error

    }
}
export async function GetTop() {
    try {
        const URL = `${API}discover/movie${KEY_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_watch_monetization_types=flatrate`
        const response = await fetch(URL)
        const result = await response.json()
        return result
    } catch (error) {
        throw error

    }
}
export async function GetMovieId(id: any) {
    try {
        const URL = `${API}movie/${id}${KEY_API}&language=en-US`
        const response = await fetch(URL)
        const result = await response.json()
        return result
    } catch (error) {
        throw error

    }
}
export async function GetRepart(id: any) {
    try {
        const URL = `${API}movie/${id}/credits${KEY_API}&language=en-US`
        const response = await fetch(URL)
        const result = await response.json()
        return result
    } catch (error) {
        throw error

    }
}




