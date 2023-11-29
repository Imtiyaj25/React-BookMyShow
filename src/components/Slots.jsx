// Slots.js
import React from "react";

// Functional component Slots receives props: slots, selectedSlot, onSlotClick
const Slots = ({ slots, selectedSlot, onSlotClick }) => {
  return (
    <div className="">
      {/* Heading for the Slots section */}
      <h2>Slots</h2>

      {/* Container for the slots, using the "box" class */}
      <div className="box">
        {/* Map through the slots array to create individual slot elements */}
        {slots.map((slot) => (
          // Each slot is represented by a div with the "box-items" class
          <div
            key={slot}
            className={`box-items ${selectedSlot === slot ? "selected" : ""}`}
            // onClick event handler triggers onSlotClick function with the slot value
            onClick={() => onSlotClick(slot)}
          >
            {slot} {/* Display the slot value */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slots;
