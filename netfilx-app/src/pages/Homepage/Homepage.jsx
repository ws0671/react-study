import React, { useEffect, useState } from "react";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [modalId, setModalId] = useState(false);

  useEffect(() => {
    const modalParam = searchParams.get("modal");
    console.log(modalParam);

    setModalId(modalParam);
  }, [searchParams]);

  const handleModalClose = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("modal");
    setSearchParams(params);
  };

  useEffect(() => {
    if (modalId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalId]);
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpcomingMovieSlide />
      {modalId && (
        <MovieDetailPage modalId={modalId} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default Homepage;
