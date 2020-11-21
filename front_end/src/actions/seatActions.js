import {
  ADD_SEAT,
  NO_OF_SEAT,
  REMOVE_SEAT,
  SET_BOOKING_DETAILS,
} from "../constants/seatConstants";

export const addSeats = (seat) => {
  return {
    type: ADD_SEAT,
    payload: seat,
  };
};

export const removeSeat = (seatId) => {
  return {
    type: REMOVE_SEAT,
    payload: seatId,
  };
};

export const setNoOfSeats = (val) => {
  return {
    type: NO_OF_SEAT,
    payload: val,
  };
};

export const setSeatBooking = (details) => {
  return {
    type: SET_BOOKING_DETAILS,
    payload: details,
  };
};
