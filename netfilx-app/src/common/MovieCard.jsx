import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMovieGenreQuery } from "../hooks/useMovieGenre";
import { useMatch, useNavigate, useSearchParams } from "react-router";
const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  const [query, setQuery] = useSearchParams();

  const navigate = useNavigate();
  const isMoviePage = useMatch("/movies");
  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);

      return genreObj.name;
    });

    return genreNameList;
  };
  const goToDetailPage = (id) => {
    if (isMoviePage) {
      navigate(`/movies/?${query}&modal=${id}`);
    } else {
      navigate(`/?modal=${id}`);
    }
  };

  return (
    <div
      onClick={() => goToDetailPage(movie.id)}
      className="w-full overflow-visible hover:translate-z-5 relative z-10 hover:z-50 hover:transform hover:scale-[1.2] bg-cover  h-[330px] cursor-pointer transition-all rounded-lg "
      style={{
        backgroundImage:
          "url(" +
          "https://media.themoviedb.org/t/p/w440_and_h660_face/" +
          movie.poster_path +
          ")",
      }}
    >
      <div className="flex flex-col  gap-2 hover:opacity-[1] w-full h-full opacity-0 text-white font-bold transition-all duration-1000 break-words bg-[rgba(43,41,41,0.9)] p-4 hover:p-4 rounded-lg">
        <div className="text-xl">{movie.title}</div>
        <div className="flex gap-2">
          <div>⭐{movie.vote_average.toFixed(1)}</div>
          <div>❤️{movie.popularity.toFixed()}</div>
          <div className="">⭕{movie.adult ? "18+" : "All"}</div>
        </div>
        <div className="flex gap-1 flex-wrap">
          {showGenre(movie.genre_ids).map((genre, index, array) => {
            return (
              <div className="font-bold" key={index}>
                {genre}
                {index < array.length - 1 && (
                  <span className="mx-2 text-gray-500">•</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
