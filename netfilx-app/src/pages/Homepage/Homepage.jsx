import React, { useState } from "react";
import PopularMovieSlide from "./components/PopularMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide";
import Banner from "./components/Banner";
import { useSearchParams } from "react-router";
import MovieDetailPage from "../MovieDetailPage";

// 1. 배너 => popular 영화를 들고와서 첫번째 아이템을 보여주자
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie
const Homepage = () => {
  const [searchParams, setSearchParmas] = useSearchParams();
  const modalId = searchParams.get("modal");
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpcomingMovieSlide />
      {modalId && <MovieDetailPage />}
    </div>
  );
};

export default Homepage;
