// LastBookingDetails.js
import React from "react";

import './Style.scss'

const LastBookingDetails = ({ lastBooking }) => {
  return (
    <div className="">
      <h2>Last Booking Details</h2>
      {lastBooking ? (
        <div>
          <p>Movie: {lastBooking.movie}</p>
          <p>Slot: {lastBooking.slot}</p>
          <p>Seats: {JSON.stringify(lastBooking.seats)}</p>
        </div>
      ) : (
        <p>No previous booking found</p>
      )}
    </div>
  );
};

export default LastBookingDetails;
