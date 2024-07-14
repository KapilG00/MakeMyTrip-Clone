import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./pages/Nav";
import Home from "./components/Home";
import Flight from "./pages/Flight";
import Hotel from "./pages/Hotel";
import PrivateRoute from "./components/PrivateRoute";
import FlightList from "./pages/FlightList";
import UserProfile from "./pages/UserProfile";
import HotelList from "./pages/HotelList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/" element={<Home />}>
            <Route path="flight" element={<Flight />} />
            <Route path="hotel" element={<Hotel />} />
          </Route>
        </Route>
        <Route path="hotel-list" element={<HotelList />} />
        <Route path="flight-list" element={<FlightList />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
