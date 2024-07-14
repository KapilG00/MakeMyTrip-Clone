import React, { useEffect, useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let username = localStorage.getItem("username");
  let view = Boolean(username);
  const navigate = useNavigate();

  function logoutHandler() {
    localStorage.clear();
    // navigate("/login");
    window.location.reload();
  }

  return (
    <>
      <div className="top-0 w-full text-white h-screen z-10">
        <img
          src="static\images\bg3.jpg"
          className="h-4/5 bg-cover bg-center absolute w-full top-0 -z-10"
        />
        <div className="flex max-h-16 items-center justify-between p-1 px-10 text-xs ">
          <Link to={"/"}>
            <img
              src="static\images\mmt_dt_top_icon.avif"
              alt="logo"
              className="h-full w-44 object-contain hover:cursor-pointer"
            />
          </Link>
          <div className="flex gap-3">
            {view && (
              <div className="flex items-center">
                <Link to={"/profile"}>
                  <button className="flex h-full items-center gap-1 rounded-md text-center shadow-lg ">
                    <FaUserAstronaut className="h-full w-9 fill-white transition-colors ease-in-out duration-200 hover:fill-blue-500" />
                  </button>
                </Link>
                <div className="flex h-full items-center gap-1 rounded-md bg-gradient-to-r px-4 py-4 text-center text-sm font-semibold shadow-lg">
                  Welcome
                  <span className="font-bold text-cyan-500">{username}</span>
                </div>
                <div
                  className="flex items-center gap-1 text-sm font-bold  hover:text-red-400 transition-colors duration-200 ease-in-out hover:cursor-pointer"
                  onClick={logoutHandler}
                >
                  Logout <IoMdLogOut className="size-6" />
                </div>
              </div>
            )}
            <div>
              <button className="flex h-full items-center gap-1 rounded-md bg-white bg-opacity-10 px-4 py-3 font-bold shadow-lg">
                <img
                  src="static\images\india.svg"
                  alt="india"
                  className="w-5"
                />
                <span className="font-bold">IN | ENG | INR</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

("useMemo()");
export default Navbar;
