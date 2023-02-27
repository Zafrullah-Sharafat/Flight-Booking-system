import { useDispatch, useSelector } from "react-redux";
import { deleteBooking } from "../Redux/flight/actions";
import SingleFlight from "./SingleFlight";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
export default function AllFlights() {
  const flightObject = useSelector((store) => store.bookings);
  const flightKeysArray = Object.keys(flightObject);
  const dispatch = useDispatch();

  const deleteSingleFlight = (id) => {
    dispatch(deleteBooking(id));
  };
  return (
    <div className="table-container">
      <table className="booking-table">
        <TableHeader />
        <TableBody>
          {flightKeysArray.length === 0
            ? ErrorMessage
            : flightKeysArray.map((id) => {
                return (
                  <SingleFlight
                    key={id}
                    from={flightObject[id].from}
                    to={flightObject[id].to}
                    journeyDate={flightObject[id].date}
                    guest={flightObject[id].guests}
                    tickhetClass={flightObject[id].class}
                    deleteFunction={() => {
                      deleteSingleFlight(id);
                    }}
                  />
                );
              })}
        </TableBody>
      </table>
    </div>
  );
}
const ErrorMessage = (
  <tr>
    <td></td>
    <td></td>
    <td>
      <h2 style={{ padding: "20px" }}>You have not booked a flight yet!</h2>
    </td>
    <td></td>
    <td></td>
  </tr>
);
