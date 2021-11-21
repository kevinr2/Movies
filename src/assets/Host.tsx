import { API, API_IMAGE } from "./Api"
import { KEY_API } from "./KeyApi"

export async function GetMovies() {
    try {
        const URL = `${API}discover/movie${KEY_API}&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&with_cast=Acting&with_watch_monetization_types=flatrate`
        const response = await fetch(URL)
        const result = await response.json()
        return result
    } catch (error) {
        throw error

    }

}

