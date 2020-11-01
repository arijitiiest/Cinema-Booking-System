import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/movieConstants'

export const movieListReducer = (state = { movies: [] }, action ) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, movies: [] }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, movies: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}