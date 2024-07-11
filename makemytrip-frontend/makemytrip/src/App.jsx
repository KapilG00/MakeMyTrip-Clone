import { Routes, BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Navbar from "./pages/Nav";
import Home from "./components/Home";
import Flight from "./pages/Flight";
import Hotel from "./pages/Hotel";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />}>
            <Route path="flight" element={<Flight />} />
            <Route path="hotel" element={<Hotel />} />
          </Route>
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
