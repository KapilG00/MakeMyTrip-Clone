import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  let username = localStorage.getItem("username");
  username = true;

  return username ? <Outlet /> : <Navigate to="/login" />;
}
