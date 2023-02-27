/* eslint-disable default-case */
import { EDIT_FEILD, SUBMIT_FORM } from "./actionTypes";
const initialState = {
  from: "",
  to: "",
  date: "",
  guests: "",
  class: "",
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_FEILD:
      const name = action.name;
      const value = action.payload;
      const nameObj = {};
      nameObj[name] = value;

      return {
        ...state,
        ...nameObj,
      };

    case SUBMIT_FORM:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
}
