import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import ReactPaginate from "react-paginate";
import { useSearchMovieQuery } from "../hooks/useSearchMovie";
import MovieCard from "../common/MovieCard";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");
  useEffect(() => {
    setPage(1);
  }, [query]);
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  console.log(data);
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <div>
      <div className="flex">
        <div className="w-[500px] h-full">하이</div>
        <div className="grid grid-cols-3">
          {data && data.results.length !== 0 ? (
            data.results.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))
          ) : (
            <div className="text-red">검색결과가없습니다.</div>
          )}
        </div>
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
    </div>
  );
};

export default MoviePage;
