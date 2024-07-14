import React from "react";
import { MdDoubleArrow } from "react-icons/md";

const UserFlightCard = ({ flight }) => {
  const username = localStorage.getItem("username");
  console.log(flight);
  return (
    <>
      <div className="flex flex-col items-center justify-between w-2/3 rounded-lg border bg-white p-4 shadow md:flex-row self-center">
        <div className="mb-4 flex md:mb-0 md:w-1/4 self-start items-center">
          <div className="self-start">
            <h3 className="text-xl font-semibold">{flight.airline}</h3>
          </div>
        </div>
        <div className="flex gap-5 items-center font-bold">
          <p className="text-md text-gray-700">{flight.from}</p>
          <MdDoubleArrow />
          <p className="text-md text-gray-700">{flight.to}</p>
        </div>

        <p className="text-md text-gray-700">{flight.duration}</p>

        <div>{new Date(flight.date).toLocaleDateString("en-US", {})}</div>
        <div>₹ {flight.price}</div>
        {username === "mmtAdmin" && <div>{flight.userRef}</div>}
      </div>
    </>
  );
};

export default UserFlightCard;
