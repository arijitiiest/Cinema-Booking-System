import { ADD_SEAT, NO_OF_SEAT, REMOVE_SEAT } from "../constants/seatConstants";

const intitalState = {
  Seats: [],
  noOfSeat: 2,
};

export const seatBookingReducer = (state = intitalState, action) => {
  switch (action.type) {
    case ADD_SEAT:
      if (state.Seats.length === state.noOfSeat) return state;
      return { ...state, Seats: [...state.Seats, action.payload] };
    case REMOVE_SEAT:
      return {
        ...state,
        Seats: state.Seats.filter((seat) => seat.id !== action.payload),
      };
    case NO_OF_SEAT:
      return {
        ...state,
        noOfSeat: action.payload,
      };
    default:
      return state;
  }
};
