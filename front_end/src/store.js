import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { movieListReducer, movieDetailReducer } from './reducers/movieReducers'
import { ratingDetailsReducer } from './reducers/ratingDetailsReducer'

const reducer = combineReducers({
    movieList: movieListReducer,
    detailRating: ratingDetailsReducer,
    movieDetail: movieDetailReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store