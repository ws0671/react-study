import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("ddd", data);
  console.log("ddd", data?.results[0].poster_path);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div
      className="before:content-[''] before:bg-gradient-to-b before:from-transparent before:to-black
      before:absolute before:left-0 before:h-[56dvh] before:w-full
      bg-no-repeat object-contain h-[56dvh] bg-center bg-cover"
      style={{
        backgroundImage:
          "url(" +
          "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/" +
          data?.results[0].poster_path +
          ")",
      }}
    >
      <div className="relative  text-white w-2/3 h-full flex flex-col justify-center p-[20px] z-10">
        <h1 className="text-xl font-bold sm:text-6xl">
          {data?.results[0].title}
        </h1>
        <p className="text-xs sm:text-xl">{data?.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
