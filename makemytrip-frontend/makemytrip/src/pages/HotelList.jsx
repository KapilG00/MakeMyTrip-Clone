import React, { useEffect, useState } from "react";
import HotelDetail from "../components/HotelDetail";

const HotelList = () => {
  const [city, setCity] = useState("Goa");
  const [location, setLocation] = useState("India");
  const [checkIn, setCheckIn] = useState("2024-07-09");
  const [checkOut, setCheckOut] = useState("2024-07-10");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    fetch("/hotels.json")
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
        setFilteredHotels(data);
      })
      .catch((error) => console.error("Error fetching hotel data:", error));
  }, []);

  const handlePriceRangeChange = (event) => {
    const range = event.target.value;
    setPriceRange(range);
  };

  useEffect(() => {
    let filtered = hotels;

    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      filtered = hotels.filter((hotel) => {
        const price = parseFloat(hotel.price); // Assuming the hotel price is a number
        if (max) {
          return price >= min && price <= max;
        }
        return price >= min;
      });
    }

    setFilteredHotels(filtered);
  }, [priceRange, hotels]);

  return (
    <>
      <div className="flex z-20 w-full absolute top-20 p-20 pt-10 gap-4 h-full grow bg-white ">
        <div className="flex w-64 flex-col gap-3 text-black">
          <div>
            <label className="flex gap-2">
              <input
                type="checkbox"
                //   checked={coupleFriendly}
                //   onChange={handleCoupleFriendlyChange}
              />
              Couple Friendly
            </label>
          </div>
          <div>
            <label className="flex gap-2">
              <input
                type="checkbox"
                //   checked={parking}
                //   onChange={handleParkingChange}
              />
              Parking
            </label>
          </div>
          <div>
            <label className="flex gap-2">
              <input
                type="checkbox"
                //   checked={offer}
                //   onChange={handleOffersChange}
              />
              Offers
            </label>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full flex-1 rounded-2xl bg-white p-4">
          <div className="top-1/3 flex w-full justify-center">
            <div className="text-l top-14 flex w-full items-center rounded-xl border border-white bg-white p-4 shadow-inner">
              <div className="flex w-full space-x-4 rounded-lg border bg-white p-4 shadow">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    City,Location
                  </label>
                  <input
                    className="w-full border-b text-lg font-bold focus:outline-none"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <input
                    className="w-full border-b text-sm text-gray-500 focus:outline-none"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Check-In
                  </label>
                  <input
                    type="date"
                    className="w-full border-b text-lg font-bold focus:outline-none"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                  <div className="text-sm text-gray-500">
                    {new Date(checkIn).toLocaleDateString("en-US", {
                      weekday: "long",
                    })}
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Check-Out
                  </label>
                  <input
                    type="date"
                    className="w-full border-b text-lg font-bold focus:outline-none"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                  <div className="text-sm text-gray-500">
                    {new Date(checkOut).toLocaleDateString("en-US", {
                      weekday: "long",
                    })}
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Rooms & Guests
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      className="w-1/2 border-b text-lg font-bold focus:outline-none"
                      value={rooms}
                      onChange={(e) => setRooms(e.target.value)}
                      min="1"
                    />
                    <input
                      type="number"
                      className="w-1/2 border-b text-lg font-bold focus:outline-none"
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      min="1"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Price Per Night
                  </label>
                  <select value={priceRange} onChange={handlePriceRangeChange}>
                    <option value="">Select a price range</option>
                    <option value="₹0-₹1500">₹0-₹1500</option>
                    <option value="₹1500-₹2500">₹1500-₹2500</option>
                    <option value="₹2500-₹3500">₹2500-₹3500</option>
                    <option value="₹3500-₹4500">₹3500-₹4500</option>
                    <option value="₹4500+">₹4500+</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {filteredHotels.length > 0 ? (
              filteredHotels.map((hotel) => (
                <HotelDetail key={hotel.hotelId} hotel={hotel} />
              ))
            ) : (
              <div>No listings found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelList;
