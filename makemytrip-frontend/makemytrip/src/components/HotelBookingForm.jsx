import React, { useState } from "react";

const HotelBookingForm = ({ hotel, onClose }) => {
  const { name, shortDescription, city, price } = hotel;
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("accessToken");
  const api = "http://localhost:8001";

  const handleSubmit = (event) => {
    event.preventDefault();

    const hotelData = {
      hotelName: name,
      hotelDescription: shortDescription,
      city: city,
      hotelPrice: price,
      username: username,
    };

    fetch(api + "/api/user/bookHotel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(hotelData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Hotel Booked Succesfully");
        onClose();

        // Reset form or handle success actions
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-8 rounded-md shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Hotel Name:
        </label>
        <input
          disabled
          type="text"
          value={name}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Hotel Description:
        </label>
        <input
          disabled
          type="text"
          value={shortDescription}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">City:</label>
        <input
          disabled
          type="text"
          value={city}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Hotel Price:
        </label>
        <input
          disabled
          type="number"
          value={price}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Username:</label>
        <input
          disabled
          type="text"
          value={username}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Book Hotel
      </button>
    </form>
  );
};

export default HotelBookingForm;
