import React, { useEffect, useState } from "react";
import UserFlightCard from "./UserFlightCard";

const UserFlight = ({ flight }) => {
  return (
    <div className="w-full flex flex-col justify-center gap-5">
      {flight.map((flight) => (
        <UserFlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
};

export default UserFlight;
