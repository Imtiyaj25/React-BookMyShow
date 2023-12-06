import React from "react";
import './Style.scss'
/**
 * Component for rendering the list of movies.
 * 
 * @param {Object} props - Component props
 * @param {Array} props.movies - List of movies
 * @param {string} props.selectedMovie - Currently selected movie
 * @param {function} props.onMovieClick - Callback function when a movie is clicked
 */
const Movies = ({ movies, selectedMovie, onMovieClick }) => {
  return (
    <div className="">
      <h2>Movies</h2>
      {/* Container for movies with a box style */}
      <div className="box">
        {/* Map through the list of movies and render each movie */}
        {movies.map((movie) => (
          <div
            key={movie}
            // Apply a box-items class with conditional 'selected' class based on selection
            className={`box-items ${selectedMovie === movie ? "selected" : ""}`}
            onClick={() => onMovieClick(movie)}
          >
            {movie}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
