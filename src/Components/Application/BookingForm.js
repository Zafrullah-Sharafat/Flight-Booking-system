import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../Redux/flight/actions";
import { editFeild, submitForm } from "../Redux/form/actions";
import frame from "./assets/img/icons/Frame.svg";
import vector1 from "./assets/img/icons/Vector (1).svg";
import vector3 from "./assets/img/icons/Vector (3).svg";
import DateFeild from "./DateFeild";
import DisableSubmitButton from "./DisableSubmitButton";
import SelectFeild from "./SelectFeild";
import SubmitBtn from "./SubmitBtn";

export default function BookingForm() {
  const flightObject = useSelector((store) => store.bookings);
  const flightKeysArray = Object.keys(flightObject);
  const flightAmount = flightKeysArray.length;
  const formData = useSelector((store) => store.form);
  const dispatch = useDispatch();
  const submitFormHandaler = (e) => {
    e.preventDefault();
    dispatch(submitForm());
    dispatch(addBooking(formData));
  };
  const changeHandler = (name, value) => {
    dispatch(editFeild(name, value));
  };
  return (
    <form
      className="first-hero lws-inputform"
      onSubmit={(e) => submitFormHandaler(e)}
    >
      <SelectFeild
        title="Destination From"
        icon={frame}
        selectName="from"
        selectId="lws-from"
        value={formData.from}
        changeHandler={changeHandler}
      >
        <option value="" hidden>
          Please Select
        </option>
        <option value="Dhaka">Dhaka</option>
        <option value="Rajshahi">Rajshahi</option>
        <option value="Cox's bazar">Cox's bazar</option>
      </SelectFeild>
      <SelectFeild
        title="Destination To"
        icon={frame}
        selectName="to"
        selectId="lws-to"
        value={formData.to}
        changeHandler={changeHandler}
      >
        <option value="" hidden>
          Please Select
        </option>
        <option value="Dhaka">Dhaka</option>
        <option value="Sylhet">Sylhet</option>
        <option value="Saidpur">Saidpur</option>
        <option value="Cox's bazar">Cox's bazar</option>
      </SelectFeild>

      <DateFeild
        title="Journey Date"
        selectName="date"
        value={formData.date}
        changeHandler={changeHandler}
      />
      <SelectFeild
        title="Guests"
        icon={vector1}
        selectName="guests"
        selectId="lws-guests"
        value={formData.guests}
        changeHandler={changeHandler}
      >
        <option value="" hidden>
          Please Select
        </option>
        <option value="1">1 Person</option>
        <option value="2">2 Persons</option>
        <option value="3">3 Persons</option>
        <option value="4">4 Persons</option>
      </SelectFeild>

      <SelectFeild
        title="Class"
        icon={vector3}
        selectName="class"
        selectId="lws-ticketClass"
        selectClassName="!border-r-0"
        value={formData.class}
        changeHandler={changeHandler}
      >
        <option value="" hidden>
          Please Select
        </option>
        <option value="Business">Business</option>
        <option value="Economy">Economy</option>
      </SelectFeild>
      {flightAmount < 3 ? <SubmitBtn /> : <DisableSubmitButton />}
    </form>
  );
}
