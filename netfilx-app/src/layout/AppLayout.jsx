import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="bg-black  ">
      <div className="bg-black text-white flex p-5 justify-between items-center">
        <div className="flex gap-6 items-center">
          <Link to="/" className="w-24">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/960px-Logonetflix.png"
              alt=""
            />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="gap-2 hidden sm:flex">
          <input type="text" className="bg-white rounded-sm" />
          <button className="rounded-sm text-red-600 border-1 border-red-600 p-2">
            Search
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
