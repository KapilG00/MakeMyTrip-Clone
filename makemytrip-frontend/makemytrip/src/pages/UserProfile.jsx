import React, { useEffect, useState } from "react";
import UserFlight from "../components/UserFlight";
import UserHotel from "../components/UserHotel";

const UserProfile = () => {
  const username = localStorage.getItem("username");
  const [isLogin, setIsLogin] = useState(true);
  const [userFlight, setUSerFlight] = useState([]);
  const [adminFlight, setAdminFlight] = useState([]);
  const [userHotels, setUserHotels] = useState([]);
  const [adminHotels, setAdminHotels] = useState([]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  const token = localStorage.getItem("accessToken");
  const api = "https://make-my-trip-api-three.vercel.app";

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(
      `${api}/api/user/bookedFlightList?username=${username}`,
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUSerFlight(data.bookedFlightListData);
      })
      .catch((error) => console.error("Error fetching flight data:", error));
  }, []);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`${api}/api/admin/allBookedFlightsList`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAdminFlight(data.allBookedFlightsListData);
      })
      .catch((error) => console.error("Error fetching flight data:", error));
  }, []);

  const fetchHotelDetails = async () => {
    try {
      const response = await fetch(
        api + `/api/user/bookedHotelList?username=${username}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching hotel details:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchHotelDetails()
      .then((data) => {
        if (data) {
          setUserHotels(data.bookedHotelListData);
        }
      })
      .catch((error) => console.error("Error setting hotel data:", error));
  }, []);

  const fetchAdminHotelDetails = async () => {
    try {
      const response = await fetch(api + `/api/admin/allBookedHotelsList`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching hotel details:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchAdminHotelDetails()
      .then((data) => {
        if (data) {
          setAdminHotels(data.allBookedHotelListData);
        }
      })
      .catch((error) => console.error("Error setting hotel data:", error));
  }, []);

  return (
    <div className="flex z-20 w-full absolute top-20 p-20 pt-0 gap-4 bg-white h-full justify-center ">
      <div className="w-full p-6 rounded-lg flex flex-col px-40">
        <div className="flex justify-between mb-6 text-black w-96 self-center">
          <button
            onClick={toggleForm}
            className={`w-full py-2 ${isLogin ? "bg-blue-500 text-white font-semibold" : "bg-gray-700"} rounded-l-lg text-white`}
          >
            {username === "mmtAdmin" ? "Flight Booked Detail" : "Flight Detail"}
          </button>
          <button
            onClick={toggleForm}
            className={`w-full py-2 ${!isLogin ? "bg-blue-500 text-white font-semibold" : "bg-gray-700"} rounded-r-lg text-white`}
          >
            {username === "mmtAdmin" ? "Hotel Booked Detail" : "Hotel Detail"}
          </button>
        </div>

        {isLogin ? (
          <UserFlight
            flight={username === "mmtAdmin" ? adminFlight : userFlight}
          />
        ) : (
          <UserHotel
            hotels={username === "mmtAdmin" ? adminHotels : userHotels}
          />
        )}
      </div>
    </div>
  );
};

export default UserProfile;
