import React, { useState, useEffect } from "react";
import axios from "axios";
import { movies as movieList, slots as slotList, seatTypes } from "./data";
import Movies from "./components/Movies";
import Slots from "./components/Slots";
import Seats from "./components/Seats";
import BookingForm from "./components/BookingForm";
import LastBookingDetails from "./components/LastBookingDetails";

import './App.scss'

const App = () => {
  // State variables to manage user selections and last booking details
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [seatSelections, setSeatSelections] = useState({});
  const [lastBooking, setLastBooking] = useState(null);

  // Fetch last booking details on component mount
  useEffect(() => {
    fetchLastBooking();
  }, []);

  // Event handler for movie selection
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  // Event handler for slot selection
  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  // Event handler for seat quantity change
  const handleSeatChange = (seat, value) => {
    setSeatSelections({ ...seatSelections, [seat]: value });
  };

  // Event handler for submitting a booking
  const handleBookingSubmit = async () => {
    try {
      const response = await axios.post(
        "https://bookmyshow-backend-qg48.onrender.com/api/booking",
        {
          movie: selectedMovie,
          seats: seatSelections,
          slot: selectedSlot,
        }
      );
      
      // Check if the booking was successful
      if (response.status === 200) {
        // Display success message
        alert(response.data);
        // Update last booking state on successful booking
        fetchLastBooking();
        // Clear selections
        setSelectedMovie("");
        setSelectedSlot("");
        setSeatSelections({});
      } else {
        // Log error if booking fails
        console.error("Booking failed:", response.data);
      }
    } catch (error) {
      // Log error if there is an issue with the booking request
      console.error("Error making booking:", error);
    }
  };

  // Fetch the details of the last booking
  const fetchLastBooking = async () => {
    try {
      const response = await axios.get("https://bookmyshow-backend-qg48.onrender.com/api/booking");
      setLastBooking(response.data);
    } catch (error) {
      // Log error if there is an issue fetching the last booking
      console.error("Error fetching last booking:", error);
    }
  };

  return (
    <div>
      {/* Application title */}
      <h1 className="title"><b>Booking System</b></h1>

      {/* Main container with two sub-containers */}
      <div className="main-container">
        {/* Sub-container 1: Displays movies, slots, and seats */}
        <div className="app-container-1">
          <Movies
            movies={movieList}
            selectedMovie={selectedMovie}
            onMovieClick={handleMovieClick}
          />
          <Slots
            slots={slotList}
            selectedSlot={selectedSlot}
            onSlotClick={handleSlotClick}
          />
          <Seats
            seatTypes={seatTypes}
            seatSelections={seatSelections}
            onSeatChange={handleSeatChange}
          />
        </div>

        {/* Sub-container 2: Displays booking form and last booking details */}
        <div className="app-container-2">
          <BookingForm onSubmit={handleBookingSubmit} />
          <LastBookingDetails lastBooking={lastBooking} />
        </div>
      </div>
    </div>
  );
};

export default App;
