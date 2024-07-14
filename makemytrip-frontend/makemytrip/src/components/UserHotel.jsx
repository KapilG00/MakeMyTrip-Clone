import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";

const UserHotel = ({ hotels }) => {
  return (
    <div className="w-full flex flex-col justify-center gap-5">
      {hotels.map((hotel) => (
        <HotelCard key={hotel._id} hotel={hotel} />
      ))}
    </div>
  );
};

export default UserHotel;
