
import React from "react";

const Movies = ({ movies, selectedMovie, onMovieClick }) => {
  return (
    <div className="">
      <h2>Movies</h2>
      <div className="box">

        {movies.map((movie) => (
          <div
            key={movie}
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
