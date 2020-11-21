import { MOVIE_LIST_REQUEST, 
    MOVIE_LIST_SUCCESS, 
    MOVIE_LIST_FAIL, 
    MOVIE_DETAIL_REQUEST, 
    MOVIE_DETAIL_SUCCESS, 
    MOVIE_DETAIL_FAIL, 
    MOVIE_CREATE_REVIEW_REQUEST,
    MOVIE_CREATE_REVIEW_SUCCESS,
    MOVIE_CREATE_REVIEW_FAIL,
    MOVIE_GET_REVIEW_REQUEST,
    MOVIE_GET_REVIEW_SUCCESS,
    MOVIE_GET_REVIEW_FAIL
} from '../constants/movieConstants'
import axios from 'axios'


export const listMovies = ( keyword = '' ) => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_LIST_REQUEST })

        const { data } = await axios.get(`/api/movies?keyword=${keyword}`)

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

export const createProductReview = ( movie_id, rating, comment ) => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_CREATE_REVIEW_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        await axios.post('/api/reviews', { movie_id, rating, comment }, config)

        dispatch({
            type: MOVIE_CREATE_REVIEW_SUCCESS,
            
        })
    } catch (error) {
        dispatch({
            type: MOVIE_CREATE_REVIEW_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const getReviews = (id) => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_GET_REVIEW_REQUEST })

        const { data } = await axios.get(`/api/reviews?movie_id=${id}`)

        dispatch({
            type: MOVIE_GET_REVIEW_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: MOVIE_GET_REVIEW_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}