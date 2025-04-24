import React, { useEffect, useState } from "react";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovies";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  const [randomNumber, setRandomNumber] = useState(null);
  console.log("data", data);

  useEffect(() => {
    if (data?.results?.length > 0) {
      const random = Math.floor(Math.random() * data.results.length);
      setRandomNumber(random);
    }
  }, [data]);

  if (isLoading || randomNumber === null) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div
      className="before:content-[''] before:bg-linear-to-b before:from-transparent before:to-black
     before:absolute before:left-0 before:h-[80dvh] before:w-full
     bg-no-repeat w-full bg-cover h-[80dvh] mb-14"
      style={{
        backgroundImage:
          "url(" +
          "https://image.tmdb.org/t/p/original/" +
          data?.results[randomNumber]?.backdrop_path +
          ")",
      }}
    >
      <div className="relative  text-white w-2/3 h-full flex flex-col justify-end p-[20px] z-10 ">
        <h1 className="text-xl font-bold sm:text-6xl">
          {data?.results[randomNumber]?.title}
        </h1>
        <p className="text-xs sm:text-xl mt-10 text-ellipsis [max-width:50ch] overflow-hidden whitespace-nowrap">
          {data?.results[randomNumber]?.overview}
        </p>
      </div>
    </div>
  );
};

export default Banner;
