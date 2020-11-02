import { MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS, MOVIE_LIST_FAIL, MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, MOVIE_DETAIL_FAIL } from '../constants/movieConstants'

export const movieListReducer = (state = { movies: [] }, action ) => {
    switch (action.type) {
        case MOVIE_LIST_REQUEST:
            return { loading: true, movies: [] }
        case MOVIE_LIST_SUCCESS:
            return { loading: false, movies: action.payload }
        case MOVIE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const movieDetailReducer = (state = { movie: { genres:[], casts: [], crews: [], languages: [] } }, action ) => {
    switch (action.type) {
        case MOVIE_DETAIL_REQUEST:
            return { loading: true, ...state }
        case MOVIE_DETAIL_SUCCESS:
            return { loading: false, movie: action.payload }
        case MOVIE_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}