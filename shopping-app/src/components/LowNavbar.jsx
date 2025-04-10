import {
  faHouse,
  faMagnifyingGlass,
  faRightFromBracket,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";

export default function LowNavbar() {
  const [searchOn, setSearchOn] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const { authenticate, setAuthenticate } = useLoaderData();
  useEffect(() => {
    if (logoutModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [logoutModal]);

  const navigate = useNavigate();
  const goLoginPage = () => {
    navigate("/login");
  };
  const openLogoutModal = () => {
    setLogoutModal(true);
  };
  const logout = () => {
    e.preventDefault();
    setAuthenticate(false);
    setLogoutModal(false);
  };
  const cancel = () => {
    setLogoutModal(false);
  };
  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <>
      <div
        className={`${
          logoutModal ? "flex" : "hidden"
        } fixed inset-0 bg-black/50 z-[101]  flex justify-center items-center`}
      >
        <form className="w-[90%] sm:w-auto bg-white flex flex-col">
          <div className="flex justify-between y-items-center text-xl border-b-1 border-gray-300 p-5">
            <div>로그아웃</div>
            <FontAwesomeIcon
              onClick={cancel}
              icon={faXmark}
              className="hover:text-gray-400 cursor-pointer"
            />
          </div>

          <div className="p-5">
            <div className="mb-5">로그아웃 하시겠습니까?</div>
            <div className="flex justify-center gap-3 sm:gap-10 flex-col sm:flex-row">
              <button
                type="submit"
                onClick={logout}
                className="w-full bg-black hover:bg-gray-700 text-white rounded-4xl sm:w-56 h-14 cursor-pointer"
              >
                로그아웃
              </button>
              <button
                type="button"
                onClick={cancel}
                className=" rounded-4xl w-full h-14 cursor-pointer border-1  sm:w-56"
              >
                취소
              </button>
            </div>
          </div>
        </form>
      </div>
      <div
        className={`fixed bottom-0 left-0 text-2xl w-full py-3  ${
          searchOn ? "bg-white " : ""
        }`}
      >
        <div
          className={`${
            searchOn ? "flex " : " hidden "
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
              onKeyDown={(e) => search(e)}
            />
          </div>
        </div>
        <div className=" flex justify-around w-full sm:justify-center sm:gap-30">
          <Link
            to="/"
            className={`     
           bg-white rounded-full cursor-pointer shadow-xl w-15 h-15 grid place-content-center`}
          >
            <FontAwesomeIcon icon={faHouse} />
          </Link>
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
          <div
            className="bg-white rounded-full cursor-pointer shadow-2xl w-15 h-15 grid place-content-center"
            onClick={authenticate ? openLogoutModal : goLoginPage}
          >
            <FontAwesomeIcon
              icon={authenticate ? faRightFromBracket : faUser}
            />
          </div>
        </div>
      </div>
    </>
  );
}
