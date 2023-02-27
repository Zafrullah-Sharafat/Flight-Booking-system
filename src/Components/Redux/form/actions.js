import { EDIT_FEILD, SUBMIT_FORM } from "./actionTypes";

// Actions
export const editFeild = (name, value) => {
  return {
    type: EDIT_FEILD,
    payload: value,
    name: name,
  };
};

export const submitForm = () => {
  return {
    type: SUBMIT_FORM,
  };
};
