import { Provider } from "react-redux";
import "./App.css";
import "./Components/Application/assets/styles/style.css";
import FlightBookingApplication from "./Components/Application/FlightBookingApplication";
import store from "./Components/Redux/store";
function App() {
  return (
    <Provider store={store}>
      <FlightBookingApplication />
    </Provider>
  );
}

export default App;
