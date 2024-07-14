import React, { useEffect, useState } from "react";
import { MdOutlineFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import HomeCard from "./HomeCard";
import Footer from "./Footer";
import { FaAngleDoubleDown } from "react-icons/fa";

const Home = () => {
  const [formData, setFormData] = useState([]);
  const api = "https://make-my-trip-api.vercel.app";
  useEffect(() => {
    const fetchListing = async () => {
      const res = await fetch(api + `/api/listing/get`);
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setFormData(data);
    };

    fetchListing();
  }, []);

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
        <div className="absolute bottom-20 text-xl font-semibold uppercase flex gap-5">
          <FaAngleDoubleDown className="size-7 animate-bounce" />
          explore more
          <FaAngleDoubleDown className="size-7 animate-bounce" />
        </div>
      </div>
      <div className="bg-[#f2f2f2] px-20 pt-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {formData.map((hotel) => (
            <div key={hotel._id}>
              <HomeCard key={hotel.id} hotel={hotel} />
            </div>
          ))}
        </div>
      </div>
      <Footer />

      <Outlet></Outlet>
    </>
  );
};

export default Home;
