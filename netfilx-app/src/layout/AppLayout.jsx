import React from "react";
import { Link, Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="bg-black h-[100dvh]">
      <div className="bg-black text-white flex p-5 justify-between items-center">
        <div className="flex gap-6">
          <Link to="/" className="w-24">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/960px-Logonetflix.png"
              alt=""
            />
          </Link>
          <div>Home</div>
          <Link to="/movies">Movies</Link>
        </div>
        <div className="flex gap-2">
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
