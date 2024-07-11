import React from "react";
import Nav from "./Nav";
import Home from "../components/Home";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="absolute">
      
        <Home />
       
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default HomePage;




