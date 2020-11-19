import { MOVIE_LIST_REQUEST, 
    MOVIE_LIST_SUCCESS, MOVIE_LIST_FAIL, 
    MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, 
    MOVIE_DETAIL_FAIL, MOVIE_CREATE_REVIEW_REQUEST, 
    MOVIE_CREATE_REVIEW_SUCCESS, 
    MOVIE_CREATE_REVIEW_FAIL, 
    MOVIE_CREATE_REVIEW_RESET,
    MOVIE_GET_REVIEW_REQUEST,
    MOVIE_GET_REVIEW_SUCCESS,
    MOVIE_GET_REVIEW_FAIL
} from '../constants/movieConstants'

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

export const movieCreateReviewReducer = (state = { }, action ) => {
    switch (action.type) {
        case MOVIE_CREATE_REVIEW_REQUEST:
            return { loading: true }
        case MOVIE_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true }
        case MOVIE_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }
        case MOVIE_CREATE_REVIEW_RESET:
            return { }
        default:
            return state
    }
}

export const moviegetReviewReducer = (state = { reviews: [] }, action ) => {
    switch (action.type) {
        case MOVIE_GET_REVIEW_REQUEST:
            return { loading: true }
        case MOVIE_GET_REVIEW_SUCCESS:
            return { loading: false, reviews: action.payload }
        case MOVIE_GET_REVIEW_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}