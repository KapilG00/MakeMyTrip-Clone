import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  let username = localStorage.getItem("username");

  return username ? <Outlet /> : <Navigate to="/login" />;
}
