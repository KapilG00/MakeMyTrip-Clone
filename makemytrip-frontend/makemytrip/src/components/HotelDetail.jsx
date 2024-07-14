import React, { useState } from "react";
import Rating from "./Rating";
import Modal from "./Modal";
import HotelBookingForm from "./HotelBookingForm";

const HotelDetail = ({ hotel }) => {
  const { name, hotelRating, thumbNailUrl, price } = hotel;
  const [open, isOpen] = useState(false);
  function onClose() {
    isOpen((old) => !old);
  }
  function onOpen() {
    isOpen((old) => !old);
  }

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <HotelBookingForm hotel={hotel} onClose={onClose} />
      </Modal>
      <div className="flex h-28 justify-between rounded-md bg-gray-100 p-4">
        <div className="flex h-full w-2/3 items-center gap-3">
          <div className="flex h-full w-4/5 gap-7">
            <img src={thumbNailUrl} alt={name} className="w-40" />

            <div className="flex flex-col font-bold">
              <Rating value={hotelRating} />
              <h1 className="text-wrap text-2xl">{name}</h1>
            </div>
          </div>
          <div className="flex w-1/5 flex-col items-center gap-2 text-sm">
            {/* <div className="flex items-center gap-2 self-start">
            <FaPeopleArrows className="size-5" />
            Couple Friendly
            <CheckComponent isChecked={coupleFriendly} />
          </div> */}
            {/* <div className="flex items-center gap-2 self-start">
            <RiParkingFill className="size-5" />
            Parking
            <CheckComponent isChecked={parking} />
          </div> */}
            {/* <div className="flex items-center gap-2 self-start">
            <BiSolidOffer className="size-5" />
            Offers
            <CheckComponent isChecked={offer} />
          </div> */}
          </div>
        </div>
        <div className="flex w-1/3 flex-col items-center justify-center gap-1">
          <div className="w-20 rounded-lg py-2 text-center text-xl font-bold">
            ₹ {price}/-
          </div>
          <button
            onClick={onOpen}
            className="rounded-lg bg-blue-500 px-10 py-2 font-semibold text-white transition-all duration-200 ease-in-out hover:bg-blue-700"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HotelDetail;
