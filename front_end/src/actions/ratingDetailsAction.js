import { RATING_DETAILS_REQUEST, RATING_DETAILS_SUCCESS, RATING_DETAILS_FAIL } from '../constants/ratingDetailsConstants'
import axios from 'axios'


export const ratingDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: RATING_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/review-data?movie_id=${id}`)

        dispatch({
            type: RATING_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: RATING_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}