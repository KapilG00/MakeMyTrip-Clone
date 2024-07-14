import React, { useState } from "react";

const FlightBookingForm = ({ flight, onClose }) => {
  const { flightName, from, to, price, duration } = flight;

  const username = localStorage.getItem("username");
  const token = localStorage.getItem("accessToken");

  const api = "https://make-my-trip-api-three.vercel.app";

  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Convert the date to the desired format
    const dateObj = new Date(date); // Assuming `date` is a valid date string
    const formattedDate = `${dateObj.getFullYear()}/${String(dateObj.getMonth() + 1).padStart(2, "0")}/${String(dateObj.getDate()).padStart(2, "0")}`;

    const flightData = {
      airlineName: flightName,
      from: from,
      to: to,
      duration,
      date: formattedDate, // Use the formatted date
      price: price,
      username: username,
    };

    fetch("/api/user/bookFlight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(flightData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Flight Booked Succesfully");
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
      className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Airline Name:
        </label>
        <input
          type="text"
          value={flightName}
          disabled
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">From:</label>
        <input
          type="text"
          value={from}
          disabled
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">To:</label>
        <input
          type="text"
          value={to}
          disabled
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Duration (hours):
        </label>
        <input
          type="text"
          value={duration}
          disabled
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Price (₹):</label>
        <input
          type="number"
          value={price}
          disabled
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Username:</label>
        <input
          type="text"
          value={username}
          disabled
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Book Flight
      </button>
    </form>
  );
};

export default FlightBookingForm;
