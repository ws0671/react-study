import React, { useEffect, useState } from "react";
import { useMatch, useSearchParams } from "react-router";
import ReactPaginate from "react-paginate";
import { useSearchMovieQuery } from "../hooks/useSearchMovie";
import MovieCard from "../common/MovieCard";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../common/Loading";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useMovieGenreQuery } from "../hooks/useMovieGenre";
import MovieDetailPage from "./MovieDetailPage";
const MoviePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [modalId, setModalId] = useState(false);

  const { data: genreData } = useMovieGenreQuery();
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  console.log("genre", genreData);

  useEffect(() => {
    setPage(1);
    const key = searchParams.get("q");
    setKeyword(key);
  }, [searchParams]);
  useEffect(() => {
    if (data) {
      setMovieList(data.results);
    }
  }, [data]);
  useEffect(() => {
    const modalParam = searchParams.get("modal");
    console.log(modalParam);

    setModalId(modalParam);
  }, [searchParams]);
  console.log("searchData", data);

  const handleModalClose = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("modal");
    setSearchParams(params);
  };
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  const handlePopularity = () => {
    const sortedResults = [...data.results].sort(
      (a, b) => b.popularity - a.popularity
    );
    setMovieList(sortedResults);
  };

  const handleLowPopularity = () => {
    const sortedResults = [...data.results].sort(
      (a, b) => a.popularity - b.popularity
    );
    setMovieList(sortedResults);
  };
  const handleGenreSort = (id) => {
    console.log("id", id);

    const sortedResults = [...data.results].filter((movie) =>
      movie.genre_ids.includes(id)
    );
    setMovieList(sortedResults);
  };
  return (
    <div className="flex-1 flex flex-col">
      {isLoading ? (
        <div className="flex-grow flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <>
          {modalId && (
            <MovieDetailPage modalId={modalId} onClose={handleModalClose} />
          )}
          <div className="flex gap-6 items-center justify-center sm:hidden mb-5">
            <Menu as="div" className="relative inline-block text-left z-[999]">
              <div className="flex gap-8">
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                  정렬 기준
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem onClick={handlePopularity}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      인기 많은순
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleLowPopularity}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      인기 적은순
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <Menu as="div" className="relative inline-block text-left z-[999]">
              <div className="flex gap-8 ">
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                  장르별 필터
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1 overflow-y-auto h-[400px]">
                  {genreData &&
                    genreData.map((genre) => (
                      <MenuItem onClick={() => handleGenreSort(genre.id)}>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                          {genre.name}
                        </a>
                      </MenuItem>
                    ))}
                </div>
              </MenuItems>
            </Menu>
          </div>
          <div className="text-gray-500 text-[32px] px-12 font-bold flex justify-between max-sm:justify-center">
            <div className="max-sm:text-lg">
              <span className="text-white">'{keyword}'</span> 검색 결과
            </div>

            <div className="flex gap-6 items-center justify-center max-sm:hidden">
              <Menu
                as="div"
                className="relative inline-block text-left z-[999]"
              >
                <div className="flex gap-8">
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                    정렬 기준
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 size-5 text-gray-400"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    <MenuItem onClick={handlePopularity}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        인기 많은순
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleLowPopularity}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        인기 적은순
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
              <Menu
                as="div"
                className="relative inline-block text-left z-[999]"
              >
                <div className="flex gap-8 ">
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                    장르별 필터
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 size-5 text-gray-400"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1 overflow-y-auto h-[400px]">
                    {genreData &&
                      genreData.map((genre) => (
                        <MenuItem onClick={() => handleGenreSort(genre.id)}>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          >
                            {genre.name}
                          </a>
                        </MenuItem>
                      ))}
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-6 place-content-center h-full p-14 max-sm:pt-8 max-sm:grid-cols-1">
            {movieList && movieList.length !== 0 ? (
              movieList.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))
            ) : (
              <>
                <div className="text-white text-2xl  col-span-6 text-center">
                  원하시는 검색결과가 없어요🥲{" "}
                </div>
              </>
            )}
          </div>
          <div className="flex justify-center font-bold">
            <ReactPaginate
              previousLabel={
                <div className="hover:bg-purple-700 rounded-full w-10 h-10 grid place-content-center cursor-pointer transition-all">
                  <FontAwesomeIcon className="" icon={faChevronLeft} />
                </div>
              }
              nextLabel={
                <div className="hover:bg-purple-700 rounded-full w-10 h-10 grid place-content-center cursor-pointer transition-all">
                  <FontAwesomeIcon className="" icon={faChevronRight} />
                </div>
              }
              pageClassName=""
              pageLinkClassName="hover:bg-purple-700 rounded-full w-10 h-10 grid place-content-center cursor-pointer transition-all "
              previousClassName=""
              previousLinkClassName="page-link"
              nextClassName=""
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="hover:bg-purple-700 rounded-full w-10 h-10 grid place-content-center cursor-pointer transition-all"
              breakLinkClassName="page-link"
              pageCount={data?.total_pages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName="flex gap-1 text-white h-10 my-6 "
              activeClassName="bg-purple-700 rounded-full w-10 h-10"
              forcePage={page - 1}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MoviePage;
