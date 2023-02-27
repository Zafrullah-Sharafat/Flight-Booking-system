import { cloneDeep } from "lodash";
import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";
const initialState = {};

export default function flightReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKING:
      const id = new Date().getTime();
      const info = action.payload;
      const bookingObj = {};
      bookingObj[id] = info;
      return {
        ...state,
        ...bookingObj,
      };

    case DELETE_BOOKING:
      const idToDelete = action.idToDelete;
      const copyState = cloneDeep(state);
      delete copyState[idToDelete];
      return {
        ...copyState,
      };
    default:
      return {
        ...state,
      };
  }
}
