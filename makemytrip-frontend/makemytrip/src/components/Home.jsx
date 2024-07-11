import React from "react";
import { MdOutlineFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { BiSolidTrain } from "react-icons/bi";
import { FaBus } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="absolute inset-0 top-1/4 flex w-full justify-center">
        <div className="text-l flex h-28 items-center justify-center gap-7 rounded-xl border border-white bg-white px-7 font-bold text-black shadow-inner">
          <NavLink
            to={"/flight"}
            className={({ isActive }) =>
              isActive
                ? `flex h-full w-20 flex-col items-center justify-center border-b-4 border-blue-700 text-blue-700`
                : "flex h-full w-20 flex-col items-center justify-center gap-1 transition-all duration-100 ease-in-out hover:border-b-4 hover:border-blue-700 hover:text-blue-700"
            }
          >
            <MdOutlineFlight className="size-12 text-gray-500" />
            Flight
          </NavLink>

          <NavLink
            to={"/hotel"}
            className={({ isActive }) =>
              isActive
                ? `flex h-full w-20 flex-col items-center justify-center border-b-4 border-blue-700 text-blue-700`
                : "flex h-full w-20 flex-col items-center justify-center gap-1 transition-all duration-100 ease-in-out hover:border-b-4 hover:border-blue-700 hover:text-blue-700"
            }
          >
            <FaHotel className="size-12 text-gray-500" />
            Hotels
          </NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Home;