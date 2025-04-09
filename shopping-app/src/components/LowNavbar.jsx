import {
  faHouse,
  faMagnifyingGlass,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function LowNavbar() {
  const [searchOn, setSearchOn] = useState(false);

  return (
    <div
      className={`fixed bottom-0 left-0 text-2xl w-full py-3 ${
        searchOn ? "bg-white" : ""
      }`}
    >
      <div
        className={`${
          searchOn ? "flex" : "hidden"
        } w-full justify-center items-center pb-5 `}
      >
        <div className="relative w-[80%] flex justify-center">
          <FontAwesomeIcon
            className="absolute text-xl left-4 z-30 bottom-[50%} translate-y-[50%] text-gray-400 "
            icon={faMagnifyingGlass}
          />
          <input
            className="w-full z-10 p-1 px-12 bg-white rounded-3xl border-1 border-gray-400 focus:outline-0"
            type="text"
          />
        </div>
      </div>
      <div className=" flex justify-around w-full sm:justify-center sm:gap-30">
        <div
          className={`     
           bg-white rounded-full shadow-xl w-15 h-15 grid place-content-center`}
        >
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <div
          className={`${
            searchOn ? "bg-black text-white" : "bg-white"
          } rounded-full w-15 h-15 shadow-xl grid place-content-center cursor-pointer `}
          onClick={() => {
            setSearchOn((prev) => !prev);
          }}
        >
          <FontAwesomeIcon icon={searchOn ? faXmark : faMagnifyingGlass} />
        </div>
        <div className="bg-white rounded-full shadow-2xl w-15 h-15 grid place-content-center">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </div>
  );
}
