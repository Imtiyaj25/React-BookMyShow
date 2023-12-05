import React from "react";

const BookingForm = ({ onSubmit }) => {
  return (
    <div className="">
      <button className='submit-btn' onClick={onSubmit}>Submit Booking</button>
    </div>
  );
};

export default BookingForm;
