import React from "react";

/**
 * Seats Component
 * 
 * @param {Object} props - Component props
 * @param {Array} props.seatTypes - Array of seat types
 * @param {Object} props.seatSelections - Object representing the selected seats
 * @param {Function} props.onSeatChange - Callback function for seat change events
 */
const Seats = ({ seatTypes, seatSelections, onSeatChange }) => {
  return (
    <div className="seats-container">
      <h2>Seats</h2>
      <div className="box">
        {/* Map through seatTypes to render input fields for each seat type */}
        {seatTypes.map((seat) => (
          <div key={seat}>
            {/* Input field for seat type with placeholder and event handler */}
            <input
              placeholder={seat}
              className="box-items seats"
              type="number"
              id={`seat-${seat}`}
              value={seatSelections[seat] || ""}
              onChange={(e) => onSeatChange(seat, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seats;
