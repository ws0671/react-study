import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useTopRatedMoviesQuery } from "../../../hooks/useTopRatedMovie";
import MovieCard from "../../../common/MovieCard/MovieCard";
import MovieSlider from "../../../common/MovieSlider";

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
      <div>
        <MovieSlider title="Top Rated Movies" movies={data.results} />
      </div>
    </div>
  );
};

export default TopRatedMovieSlide;
