import { combineReducers } from "redux";
import flightReducer from "./flight/flightReducer";
import formReducer from "./form/formReducer";

const rootReducer = combineReducers({
  form: formReducer,
  bookings: flightReducer,
});

export default rootReducer;
