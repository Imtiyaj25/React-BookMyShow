import React from "react";

// Import the styles for this component
import './Style.scss';

/**
 * LastBookingDetails Component displays information about the last booking.
 */
const LastBookingDetails = ({ lastBooking }) => {
  return (
    <div className="">
      {/* Heading for Last Booking Details */}
      <h2>Last Booking Details</h2>

      {/* Check if there is a last booking */}
      {lastBooking ? (
        <div>
          {/* Display movie information */}
          <p>Movie: {lastBooking.movie}</p>
          
          {/* Display slot information */}
          <p>Slot: {lastBooking.slot}</p>
          
          {/* Display seat information using JSON.stringify */}
          <p>Seats: {JSON.stringify(lastBooking.seats)}</p>
        </div>
      ) : (
        // Display message when no previous booking is found
        <p>No previous booking found</p>
      )}
    </div>
  );
};

export default LastBookingDetails;
