import {
  PROFILE_ERROR,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
} from "../constants/profileConstants";

const initialState = {
  loading: false,
  user: {},
  bookings: [],
  error: false,
};

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
      return { ...state, loading: true };
    case PROFILE_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    case PROFILE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
