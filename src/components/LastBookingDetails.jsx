import React from "react";

// Import the styles for this component
import './Style.scss';

/**
 * LastBookingDetails Component displays information about the last booking.
 */
const LastBookingDetails = ({ lastBooking }) => {
  return (
    <div className="last-order">
      {/* Heading for Last Booking Details */}
      <h2>Last Booking Details</h2>

      {/* Check if there is a last booking */}
      {lastBooking ? (
        <div className="">
          {/* Display movie information */}
          <p>Movie: <b>{lastBooking.movie}</b></p>
          
          {/* Display slot information */}
          <p>Slot: <b>{lastBooking.slot}</b></p>
          
          {/* Display seat information using JSON.stringify */}
          <p>Seats: <b>{JSON.stringify(lastBooking.seats)}</b></p>
        </div>
      ) : (
        // Display message when no previous booking is found
        <p>No previous booking found</p>
      )}
    </div>
  );
};

export default LastBookingDetails;
