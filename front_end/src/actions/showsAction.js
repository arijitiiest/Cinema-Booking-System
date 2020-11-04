import { SHOW_LIST_REQUEST, 
    SHOW_LIST_SUCCESS, SHOW_LIST_FAIL, 
    SHOW_DETAIL_REQUEST, SHOW_DETAIL_SUCCESS, 
    SHOW_DETAIL_FAIL,
    SHOWBYLANG_LIST_REQUEST, 
    SHOWBYLANG_LIST_SUCCESS, 
    SHOWBYLANG_LIST_FAIL 
} from '../constants/showConstants'
import axios from 'axios'


export const listShows = () => async (dispatch) => {
    try {
        dispatch({ type: SHOW_LIST_REQUEST })

        const { data } = await axios.get('/api/shows')

        dispatch({
            type: SHOW_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SHOW_LIST_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const listShowbyLang = (id, lang) => async (dispatch) => {
    try {
        dispatch({ type: SHOWBYLANG_LIST_REQUEST })

        const { data } = await axios.get(`/api/shows/?movie_id=${id}&language=${lang}`)

        dispatch({
            type: SHOWBYLANG_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SHOWBYLANG_LIST_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const detailShow = (id) => async (dispatch) => {
    try {
        dispatch({ type: SHOW_DETAIL_REQUEST })

        const { data } = await axios.get(`/api/movie/${id}`)

        dispatch({
            type: SHOW_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SHOW_DETAIL_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}