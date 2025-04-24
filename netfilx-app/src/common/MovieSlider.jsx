import React from "react";
import { responsive } from "../common/constants/responsive.js";
import Carousel from "react-multi-carousel";
import MovieCard from "./MovieCard.jsx";
const MovieSlider = ({ title, movies }) => {
  return (
    <div>
      <h3 className="text-white ml-10 uppercase font-bold text-xl">{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container h-[440px]"
        responsive={responsive}
      >
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
