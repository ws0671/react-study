import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useTopRatedMoviesQuery } from "../../../hooks/useTopRatedMovie";
import MovieCard from "./MovieCard/MovieCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <h3 className="text-white">Top Rated Movies</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie=slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {data.results.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default TopRatedMovieSlide;
