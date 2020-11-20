import { ADD_SEAT, NO_OF_SEAT, REMOVE_SEAT } from "../constants/seatConstants";

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
