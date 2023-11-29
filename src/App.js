// App.js
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
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [seatSelections, setSeatSelections] = useState({});
  const [lastBooking, setLastBooking] = useState(null);

  useEffect(() => {
    // Fetch last booking on component mount
    fetchLastBooking();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleSeatChange = (seat, value) => {
    setSeatSelections({ ...seatSelections, [seat]: value });
  };

  const handleBookingSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/booking",
        {
          movie: selectedMovie,
          seats: seatSelections,
          slot: selectedSlot,
        }
      );
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
        console.error("Booking failed:", response.data);
      }
    
    } catch (error) {
      console.error("Error making booking:", error);
    }
  };

  const fetchLastBooking = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/booking");
      setLastBooking(response.data);
    } catch (error) {
      console.error("Error fetching last booking:", error);
    }
  };

  return (
    <div>
      <h1 className="title"><b>Booking System</b></h1>
      <div className="main-container">
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

        <div className="app-container-2">
          <BookingForm onSubmit={handleBookingSubmit} />
          <LastBookingDetails lastBooking={lastBooking} />
        </div>
      </div>
      
      
    </div>
  );
};

export default App;
