import React, { useEffect } from "react";
import useMovieStore from "../stores/useMovieStore";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMovieDetail } from "../hooks/useMovieDetail";
import Loading from "../common/Loading";

const MovieDetailPage = ({ modalId, onClose }) => {
  const { data, isLoading, error, isError } = useMovieDetail(modalId);
  console.log(data);

  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="fixed inset-0 bg-black/70 z-[1000]">
      <div className="fixed inset-0   flex justify-center items-start overflow-auto ">
        <div className="relative w-[1000px] z-[1001]  mt-10 rounded-lg   h-[105vh] ">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <Loading />
            </div>
          ) : (
            <>
              <div
                className="before:content-[''] before:bg-linear-to-b before:from-transparent before:to-black/70
         before:absolute before:left-0 before:h-[80dvh]
         bg-no-repeat w-full bg-cover h-[80dvh] rounded-t-lg   before:w-full "
                style={{
                  backgroundImage:
                    "url(" +
                    "https://image.tmdb.org/t/p/original/" +
                    data?.backdrop_path +
                    ")",
                }}
              >
                <div className="relative  text-white h-full flex flex-col p-[20px] z-10 ">
                  <div className="text-right text-2xl flex justify-end">
                    <div
                      className="w-10 h-10 bg-black rounded-full grid place-content-center cursor-pointer "
                      onClick={onClose}
                    >
                      <FontAwesomeIcon className="" icon={faXmark} />
                    </div>
                  </div>
                  <h1 className="text-xl font-bold sm:text-6xl mt-100">
                    {data?.title}
                  </h1>
                </div>
              </div>
              <div className="bg-[#181818] rounded-b-lg p-8 text-white ">
                <div className="flex justify-between">
                  <div className="">
                    <div className="flex gap-8 mb-2">
                      <div>⭐{data?.vote_average.toFixed(1)}</div>
                      <div>❤️{data?.popularity.toFixed()}</div>
                      <div className="">⭕{data?.adult ? "18+" : "All"}</div>
                    </div>
                    <div className="space-y-2">
                      <div>Budget : {data?.budget}</div>
                      <div>Revenue : {data?.revenue}</div>
                      <div>Release Date : {data?.release_date}</div>
                      <div>Runtime : {data?.runtime}</div>
                    </div>
                  </div>{" "}
                  <div>
                    {data?.genres?.map((genre, index, array) => {
                      return (
                        <span className="font-bold" key={index}>
                          {genre.name}
                          {index < array.length - 1 && (
                            <span className="mx-2 text-gray-500">•</span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="flex gap-1 flex-wrap"></div>

                <p className="text-xs sm:text-xl mt-10 text-ellipsis  ">
                  {data?.overview}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
