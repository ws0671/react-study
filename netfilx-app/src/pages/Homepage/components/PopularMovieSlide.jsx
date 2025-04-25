import React, { useEffect } from "react";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovies";
import MovieCard from "../../../common/MovieCard";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import MovieSlider from "../../../common/MovieSlider";
import useMovieStore from "../../../stores/useMovieStore.js";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  const setPopularMovies = useMovieStore((state) => state.setPopularMovies);

  useEffect(() => {
    if (data) {
      setPopularMovies(data.results);
    }
  }, [data, setPopularMovies]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <MovieSlider title="Popular Movies" movies={data.results} />
    </div>
  );
};

export default PopularMovieSlide;
