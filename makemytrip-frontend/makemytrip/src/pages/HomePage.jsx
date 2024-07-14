import React from "react";
import Home from "../components/Home";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="absolute z-40">
        <Home />
      </div>

      <Outlet></Outlet>
    </>
  );
};

export default HomePage;
