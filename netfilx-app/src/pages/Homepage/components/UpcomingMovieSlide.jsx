import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useUpcomingMoviesQuery } from "../../../hooks/useUpcomingMovie";
import MovieCard from "../../../common/MovieCard";
import MovieSlider from "../../../common/MovieSlider";

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <MovieSlider title="Upcoming Movies" movies={data.results} />
    </div>
  );
};

export default UpcomingMovieSlide;
