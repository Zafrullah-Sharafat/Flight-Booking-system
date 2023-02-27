import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";
// Actions
export const addBooking = (bookingInfo) => {
  return {
    type: ADD_BOOKING,
    payload: bookingInfo,
  };
};

export const deleteBooking = (id) => {
  return {
    type: DELETE_BOOKING,
    idToDelete: id,
  };
};
