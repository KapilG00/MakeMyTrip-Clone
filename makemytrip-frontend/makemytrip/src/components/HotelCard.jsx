import React from "react";

const HotelCard = ({ hotel }) => {
  const username = localStorage.getItem("username");
  console.log(hotel, "card");
  return (
    <div className="flex flex-col items-center justify-between w-2/3 rounded-lg border bg-white p-4 shadow md:flex-row self-center">
      <div className="mb-4 flex items-center md:mb-0 md:w-1/4 self-start gap-4 flex-col ">
        <div className="self-start flex items-center">
          <h3 className="text-xl font-semibold">{hotel.name}</h3>
        </div>
        <div className="self-start">
          <p className="text-md text-gray-700">{hotel.city}</p>
        </div>
      </div>
      <div className="mb-4 text-center md:mb-0 md:w-1/4">
        <p className="text-left">{hotel.description}</p>
      </div>
      <div className="text-2xl font-bold">₹ {hotel.price}</div>
      {username === "mmtAdmin" && (
        <div className="text-xl ">{hotel.userRef}</div>
      )}
    </div>
  );
};

export default HotelCard;
