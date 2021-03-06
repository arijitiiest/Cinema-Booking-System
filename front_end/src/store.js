import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  movieListReducer,
  movieDetailReducer,
  movieCreateReviewReducer,
  moviegetReviewReducer,
} from "./reducers/movieReducers";
import { ratingDetailsReducer } from "./reducers/ratingDetailsReducer";
import {
  showListReducer,
  showDetailReducer,
  showbyLangListReducer,
} from "./reducers/showReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { seatBookingReducer } from "./reducers/seatReducer";
import { ProfileReducer } from "./reducers/profileReducer";

const reducer = combineReducers({
  movieList: movieListReducer,
  movieDetail: movieDetailReducer,
  detailRating: ratingDetailsReducer,
  showList: showListReducer,
  showDetail: showDetailReducer,
  showbyLangList: showbyLangListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  movieCreateReview: movieCreateReviewReducer,
  moviegetReview: moviegetReviewReducer,
  seatBooking: seatBookingReducer,
  profile: ProfileReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
