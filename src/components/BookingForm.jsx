import React from "react";

/**
 * BookingForm Component
 * @param {Object} props - Component props
 * @param {Function} props.onSubmit - Function to handle form submission
 */
const BookingForm = ({ onSubmit }) => {
  return (
    <div className="">
      {/* Booking Form Submit Button */}
      <button className="submit-btn" onClick={onSubmit}>
        Submit Booking
      </button>
    </div>
  );
};

export default BookingForm;
