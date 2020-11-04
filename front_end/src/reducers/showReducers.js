import { SHOW_LIST_REQUEST, 
    SHOW_LIST_SUCCESS, SHOW_LIST_FAIL, 
    SHOW_DETAIL_REQUEST, SHOW_DETAIL_SUCCESS, 
    SHOW_DETAIL_FAIL, SHOWBYLANG_LIST_REQUEST, 
    SHOWBYLANG_LIST_SUCCESS, 
    SHOWBYLANG_LIST_FAIL 
} from '../constants/showConstants'

export const showListReducer = (state = { shows: [] }, action ) => {
    switch (action.type) {
        case SHOW_LIST_REQUEST:
            return { loading: true, shows: [] }
        case SHOW_LIST_SUCCESS:
            return { loading: false, shows: action.payload }
        case SHOW_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const showbyLangListReducer = (state = { shows: [] }, action ) => {
    switch (action.type) {
        case SHOWBYLANG_LIST_REQUEST:
            return { loading: true, shows: [] }
        case SHOWBYLANG_LIST_SUCCESS:
            return { loading: false, shows: action.payload }
        case SHOWBYLANG_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const showDetailReducer = (state = { show: {} }, action ) => {
    switch (action.type) {
        case SHOW_DETAIL_REQUEST:
            return { loading: true, ...state }
        case SHOW_DETAIL_SUCCESS:
            return { loading: false, show: action.payload }
        case SHOW_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}