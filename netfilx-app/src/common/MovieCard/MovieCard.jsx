import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  console.log("genreData", genreData);

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    console.log(genreNameList);

    return genreNameList;
  };

  return (
    <div
      className="overflow-visible hover:translate-z-5 relative z-10 hover:z-50 hover:transform hover:scale-[1.3] bg-cover w-[220px] h-[330px] cursor-pointer transition-all  "
      style={{
        backgroundImage:
          "url(" +
          "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/" +
          movie.poster_path +
          ")",
      }}
    >
      <div className="hover:opacity-[1] w-full h-full opacity-0 text-white font-bold transition-all duration-1000 break-words bg-[rgba(43,41,41,0.9)] p-4 hover:p-4">
        <div>제목: {movie.title}</div>
        <div className="flex gap-1">
          {showGenre(movie.genre_ids).map((genre, index) => {
            return (
              <div className="bg-amber-700 rounded-4xl px-2 py-1 " key={index}>
                {genre}
              </div>
            );
          })}
        </div>
        <div>
          <div>평점: {movie.vote_average}</div>
          <div>인기: {movie.popularity}</div>
          <div>연령: {movie.adult ? "over18" : "under18"}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
