// Seats.js
import React from "react";

const Seats = ({ seatTypes, seatSelections, onSeatChange }) => {
  return (
    <div className="">
      <h2>Seats</h2>
      <div className="box">
        {seatTypes.map((seat) => (
          <div key={seat}>
            {/* <h3 className="box-items">{`Typ ${seat}`}</h3> */}
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
