import axois from "axios";

import {
  PROFILE_ERROR,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
} from "../constants/profileConstants";

export const profileDetails = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PROFILE_REQUEST });

    const token = getState().userLogin.userInfo.token;

    const { data } = await axois.get("http://localhost:5000/auth/profile", {
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
