import { RATING_DETAILS_REQUEST, RATING_DETAILS_SUCCESS, RATING_DETAILS_FAIL } from '../constants/ratingDetailsConstants'

export const ratingDetailsReducer = (state = { rating: [{}] }, action ) => {
    switch (action.type) {
        case RATING_DETAILS_REQUEST:
            return { loading: true, rating: [] }
        case RATING_DETAILS_SUCCESS:
            return { loading: false, rating: action.payload }
        case RATING_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}