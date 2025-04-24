import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const [keyword, setKeyword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsVisible(false); // 폼 외부 클릭 시 false로
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const searchByKeyword = (event) => {
    event.preventDefault();
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };
  return (
    <div>
      <div className=" flex gap-10  justify-center bg-black text-white py-4 ">
        <div className="flex justify-end items-center gap-4 font-bold w-[320px] ">
          <Link className="uppercase text-sm" to="/">
            Home
          </Link>
          <Link className="uppercase text-sm" to="/movies">
            Movies
          </Link>
          <div className="hidden">
            <FontAwesomeIcon className="" icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/" className="inline-block">
            <img className="w-24" src="/images/4.png" alt="" />
          </Link>
        </div>
        <div className=" w-[320px] flex items-center justify-center transition-all">
          <form
            ref={formRef}
            onClick={() => setIsVisible(true)}
            className="gap-2 hidden sm:flex items-center justify-center"
            onSubmit={searchByKeyword}
          >
            {isVisible ? (
              <></>
            ) : (
              <button className="rounded-full p-2 px-3 cursor-pointer hover:bg-gray-500 transition-colors">
                <FontAwesomeIcon className="" icon={faMagnifyingGlass} />
              </button>
            )}
            {isVisible && (
              <div className="relative flex items-center">
                <button className="absolute left-0 p-2 px-3  transition-colors grid place-content-center">
                  <FontAwesomeIcon className="" icon={faMagnifyingGlass} />
                </button>
                <input
                  type="text"
                  className="border-1 border-white px-10 w-80 h-10 text-sm  text-white rounded-sm"
                  onChange={(event) => setKeyword(event.target.value)}
                  value={keyword}
                />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
