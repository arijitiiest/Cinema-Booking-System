import { MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS, MOVIE_LIST_FAIL, MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, MOVIE_DETAIL_FAIL } from '../constants/movieConstants'
import axios from 'axios'


export const listMovies = () => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_LIST_REQUEST })

        const { data } = await axios.get('/api/movies')

        dispatch({
            type: MOVIE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: MOVIE_LIST_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const detailMovie = (id) => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_DETAIL_REQUEST })

        const { data } = await axios.get(`/api/movie/${id}`)

        dispatch({
            type: MOVIE_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: MOVIE_DETAIL_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}